import Router from "express-promise-router";
import get from "./get/get.js";
const router = Router();

router.get("/", get);

export default router;
