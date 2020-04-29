
const mongoose=require('mongoose')
const Schema=mongoose.Schema
const CustomerSchema=Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}
})
const Customer=mongoose.model('customer',CustomerSchema,'customer')
module.exports=Customer
