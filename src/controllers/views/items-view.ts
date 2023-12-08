import { Router } from "express";

import { GetAllItemsService } from "../../services/items/get-all-items";

export const itemRouter = Router();

itemRouter.get("/items", async (_, res) => {
  const items = await new GetAllItemsService().execute();

  return res.render("items/all-items", {
    items: items || []
  });
});

itemRouter.get("/items/create", (_, res) => {
  return res.render("items/create-item", {message: null});
});
