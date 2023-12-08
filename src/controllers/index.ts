import { Router } from "express";

import { authApiRouter } from "./api/auth-controller";
import { itemsApiRouter } from "./api/items-controller";

import { adminRouter } from "./views/admin-view";
import { authRouter } from "./views/auth-view";
import { homeRouter } from "./views/home-view";
import { itemRouter } from "./views/items-view";
import { orderRouter } from "./views/orders-view";

export const router = Router();

// Controllers for views
router.use(homeRouter);
router.use(authRouter);
router.use(orderRouter);
router.use(itemRouter);
router.use(adminRouter);

// Controllers for api
router.use(authApiRouter);
router.use(itemsApiRouter);

router.all("*", (_, res) => {
  return res.render("errors/not-found");
});
