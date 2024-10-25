import Router from "express-promise-router";
import post from "./post/post.js";
import get from "./get/get.js";
import auth from "../../middlewares/auth.js";
const router = Router();

// router.use("/:", extractParam("productId"), productId);
router.post("/", post);
router.get("/", auth, get);

export default router;
