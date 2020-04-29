const router=require('express').Router()
const ProductTypesModel=require('../model/ProductType')

router.get("/",async (req,res,next)=>{
    let productTypes=await ProductTypesModel.find()
    res.status(200).send(productTypes)
})
router.post("/",async (req,res,next)=>{
    let data=req.body
    let productType = await new ProductTypesModel(data).save()
    res.status(200).send(productType)
})
router.put("/",async(req,res,next)=>{
    let data=req.body
    let productType= await ProductTypesModel.findByIdAndUpdate(data._id,data,{new:true})
    res.status(200).send(productType)
})
router.delete("/",async (req,res,next)=>{
    try{
        let data=req.body
        await ProductTypesModel.findByIdAndDelete(data._id) 
        res.status(200).send({message:'success'})
    }catch(e){
     res.status(400).send({message:"errors"})   
    }
})
module.exports=router