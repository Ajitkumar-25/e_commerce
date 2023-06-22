const mongoose=require('mongoose');
const Productchema=new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String
});
module.exports=mongoose.model("Prods",Productchema);