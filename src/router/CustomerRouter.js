const express = require("express");
const router = express.Router();
const CustomerModel = require("../model/Customer");

router.get("/", async (req, res, next) => {
  var customers = await CustomerModel.find();
  console.log(JSON.stringify(customers));
  res.status(200).send(customers);
});

router.post("/login", async (req, res, next) => {
  try {
    var { username, password } = req.body;
    var cus = await CustomerModel.findOne({ username: username });
    if (cus.password == password) res.status(200).send(cus);
    else res.status(500).send({ message: "username or password incorrect" });
  } catch (e) {
    res.status(500).send({ message: "username or password incorrect" });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    let { username } = req.body;
    var customer = await CustomerModel.find({ username: username });
    if (customer.length > 0) throw Error("Username is exists");
    var cus = await new CustomerModel(req.body).save();
    res.status(200).send(cus);
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
});

module.exports = router;
