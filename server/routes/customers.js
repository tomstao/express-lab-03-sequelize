const router = require("express").Router();
const {Customer, Order, Product} = require("../db");

/* =========================================================================
   GET /api/customers
   ========================================================================= */
router.get("/", async (_req, res, next) => {
    try {
        /* Implementation Steps:
           1. Fetch all customers
           2. Include Orders (+ Products) for eager‑loading practice
           3. Return JSON array
        */
        const allCustomers = await Customer.findAll(
            {
                include: [
                    {
                        model: Order,
                        include: [Product],
                    }
                ]
            }
        )

        res.json(allCustomers);
    } catch (error) {
        next(error);
    }
});

/* =========================================================================
   GET /api/customers/:id
   ========================================================================= */
router.get("/:id", async (req, res, next) => {
    try {
        /* Implementation Steps:
           1. Find customer by PK
           2. Include Orders (+ Products)
           3. 404 if not found
           4. Return customer JSON
        */
        const customerId = req.params.id;

        const products = await Customer.findByPk(customerId, {
            include: [
                {
                    model: Order,
                    include: [Product],
                }
            ],
            }
        );
        if (!products) {
            return res.status(404).json({
                status: "Invalid customer ID",
            })
        }
        res.json(products);
    } catch (error) {
        next(error);
    }
});

/* =========================================================================
   POST /api/customers
   -------------------------------------------------------------------------
   Body: { name, email }
   ========================================================================= */
router.post("/", async (req, res, next) => {
    try {
        /* Implementation Steps:
           1. Validate required fields (name, email)
           2. Create customer
           3. Return 201 + created customer
           4. 400 on validation errors
        */

        const {name, email} = req.body;

        if (!name || !email) {
            return res.status(400).json({
                status: "invalid email or name",
            })
        }

        const customer = await Customer.create({name, email});
        return res.status(201).json(customer);
    } catch (error) {
        next(error);
    }
});

/* =========================================================================
   PUT /api/customers/:id
   ========================================================================= */
router.put("/:id", async (req, res, next) => {
    try {
        /* Implementation Steps:
           1. Find customer by PK
           2. 404 if not found
           3. Update fields (partial)
           4. Return updated JSON
        */

        const customerId = req.params.id;
        const {name, email} = req.body;
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({
                status: "invalid customer ID",
            })
        }

        if (name !== undefined) customer.name = name;
        if (email !== undefined) customer.email = email;

        if (name === undefined && email === undefined) {
            return res.status(400).json({
                status: "Invalid name and email!",
            })
        }

        await customer.save();
        return res.status(201).json(customer);
    } catch (error) {
        next(error);
    }
});

/* =========================================================================
   DELETE /api/customers/:id
   ========================================================================= */
router.delete("/:id", async (req, res, next) => {
    try {
        /* Implementation Steps:
           1. Destroy customer by PK
           2. 404 if not found
           3. Return 204 No Content
        */

        const customerId = req.params.id;

        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({})
        }
        await customer.destroy();

        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
