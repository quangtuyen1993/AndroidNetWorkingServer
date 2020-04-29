const express=require('express')
const router=express.Router()
const ProductModel=require('../model/Product')

router.get("/",async(req,res,next)=>{
    var {productTypeId}=req.query;
    console.log(productTypeId)
    let products=await ProductModel.find({_idProductType:productTypeId})
    res.status(200).send(products)
})
router.post('/',async(req,res,next)=>{
    try{
        console.log(JSON.stringify(req.body))
        let product=await new ProductModel(req.body).save()
        res.status(200).send(product)

    }catch(e){
        console.log(e.message)
    }

})
router.put('/',async(req,res,next)=>{
    let product =await ProductModel.findByIdAndUpdate(req.body._id,req.body)
    res.status(200).send(product)
})

router.delete('/',async(req,res,next)=>{
    var data=req.query
    await ProductModel.findByIdAndDelete(req.query._id)
    res.status(200).send(data)
})
module.exports=router