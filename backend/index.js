const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/users");
const app = express();

app.use(express.json());
app.use(cors());
//hum log password ko hide krenge 
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result=result.toObject();
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

app.listen(5000);
