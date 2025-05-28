const router = require("express").Router();
const { Order, Product, Customer } = require("../db");

/* =========================================================================
   GET /api/orders/:id
   -------------------------------------------------------------------------
   Return a single order, its customer, and its products.
   ========================================================================= */
router.get("/:id", async (req, res, next) => {
  try {
    /* Implementation Steps:
       1. Find order by primary key (req.params.id)
       2. Include Customer and Products (through table)
       3. If not found → 404 JSON { error: "Order not found" }
       4. Calculate total price (sum of line items)
       5. Return order JSON + total
    */
    // const order = await Order.findByPk(...)
    // let total = 0;
    // ...calculate total here...
    // res.json({ ...order.toJSON(), total });
    const orderId = req.params.id;

    const order = await Order.findByPk(orderId,
        {
          include: [
            {
              model: Product, Customer
            }
          ]
        }
        )
    if (!order) {
      res.status(404).end(
          {
            message: "Order Not Found",
          }
      );
    }



  } catch (error) {
    next(error);
  }
});

/* --------------------------------------------------------------------------
   TODO: Add the rest of the CRUD routes

   - GET /api/orders          → list all orders (+ eager‑loaded data)
   - POST /api/orders         → create new order (validate body)
   - PUT  /api/orders/:id     → update order (status, products, etc.)
   - DELETE /api/orders/:id   → delete order
-------------------------------------------------------------------------- */

module.exports = router;
