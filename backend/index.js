const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/users");
const Product = require("./db/Prods");
const app = express();

app.use(express.json());
app.use(cors());

//hum log password ko hide krenge
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

//during login we have checked many conditions like both email and password should match
// and also we have hidden password
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else resp.send({ result: "no user found" });
  } else {
    resp.status(422).send({ error: "invalid request" });
  }
});

//route for adding product
app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

//route for listing all products
app.get("/list-products", async (req, resp) => {
  let products = await Product.find();
  if(products.length>0)
  resp.send(products);
  else
  resp.send({result:"nothing found"})
});

//delete api 
app.delete("/delete-product/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});


//prefill form api
app.get("/product/:id", async (req, resp) => {
    let result= await Product.findOne({_id:req.params.id})
    if(result){
    resp.send(result);
    }
    else
    resp.send({result:"No record found"})
  }
  
);

app.listen(5000);
