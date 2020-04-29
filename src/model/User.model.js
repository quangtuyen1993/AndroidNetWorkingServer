const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String
});

const Data = mongoose.model("customers", CustomerSchema, "customers");
module.exports = Data;
