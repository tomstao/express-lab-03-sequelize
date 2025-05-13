const router = require("express").Router();
const { Product } = require("../db");

/* =========================================================================
   GET /api/products
   -------------------------------------------------------------------------
   Return all products.
   ========================================================================= */
router.get("/", async (_req, res, next) => {
  try {
    /* Implementation Steps:
       1. Fetch all products
       2. Return JSON array
    */
  } catch (error) {
    next(error);
  }
});

/* =========================================================================
   GET /api/products/:id
   ========================================================================= */
router.get("/:id", async (req, res, next) => {
  try {
    /* Implementation Steps:
       1. Find product by PK
       2. 404 if not found
       3. Return product JSON
    */
  } catch (error) {
    next(error);
  }
});

/* =========================================================================
   POST /api/products
   -------------------------------------------------------------------------
   Body: { name, price, stock }
   ========================================================================= */
router.post("/", async (req, res, next) => {
  try {
    /* Implementation Steps:
       1. Validate required fields (name, price)
       2. Create product
       3. Return 201 + created product
       4. 400 on validation errors
    */
  } catch (error) {
    next(error);
  }
});

/* =========================================================================
   PUT /api/products/:id
   ========================================================================= */
router.put("/:id", async (req, res, next) => {
  try {
    /* Implementation Steps:
       1. Find product by PK
       2. 404 if not found
       3. Update with partial body
       4. Return updated JSON
    */
  } catch (error) {
    next(error);
  }
});

/* =========================================================================
   DELETE /api/products/:id
   ========================================================================= */
router.delete("/:id", async (req, res, next) => {
  try {
    /* Implementation Steps:
       1. Destroy product by PK
       2. 404 if not found
       3. Return 204 No Content
    */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
