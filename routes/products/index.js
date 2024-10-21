import Router from "express-promise-router";
import get from "./get/get.js";
import productId from "./productId/index.js";
import extractParam from "../../middlewares/extractParams.js";
const router = Router();

router.use("/:productId", extractParam("productId"), productId);
router.get("/", get);

export default router;
