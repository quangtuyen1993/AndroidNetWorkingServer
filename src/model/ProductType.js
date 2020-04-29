const mongoose =require('mongoose')
const Schema=mongoose.Schema
const ProductTypeSchema=Schema({
    name:{type:String,require:true}
    ,description:{type:String}
})
module.exports=mongoose.model('productTypes',ProductTypeSchema,'productTypes')