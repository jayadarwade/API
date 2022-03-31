const Order = require('../model/order');
const cart = require('../model/card');
exports.add=(req,res)=>{
  cart.findOne({_id:req.params.id}).populate('productList')
    // .then(result=>{
    //     //  result.productList[0].name,
    //     console.log(result);
    //     return res.status(200).json(result)
    // })
    
 var order = new Order({
    Address:req.body.address,
     ItemQty:req.body.Qty*1,
 })
    order.save()
    .then(result=>{
        console.log(result);
        return res.status(201).json(result)
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:'wrong'});
    })
}