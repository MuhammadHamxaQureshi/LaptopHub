import Order from "../models/Order.js";

export const addOrder = (req, res) => {
  const newOrder = new Order(req.body);

  newOrder.save()
    .then((savedOrder) => res.status(201).send(`Order placed successfully. Order number: ${savedOrder.orderNumber}`))
    .catch((error) => res.status(500).send("Error placing order: " + error));
};

export const cancelOrder = (req, res) => {
  const orderNumber = req.body.orderNumber?.trim().toUpperCase();

  Order.deleteOne({ orderNumber: new RegExp(`^${orderNumber}$`, "i") })
    .then((result) => {
      if (!result.deletedCount) return res.status(404).send("Order not found");
      res.send("Order deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting order: " + error));
};
