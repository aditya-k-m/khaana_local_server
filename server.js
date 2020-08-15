//authored, aditya_k_m

//importing dependencies
const express = require("express");
const bodyParser = require("body-parser");

//getting things ready
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//setting up the home route
app.get("/", function(req, res){
    res.send("Home route working !");
});

//setting up the OTP generation route
app.post("/generate-otp", function(req, res){
    let otp = Math.floor(1000 + Math.random() * 9000);
    const phoneNo = req.body.phoneNo;
    console.log(phoneNo);
    console.log(otp);
    res.send(otp.toString());
});

//setting up customer information route
app.get("/customer/:customerId", function(req, res){
    let customerId = req.params.customerId;
    const customers = require("./data/customers.json");
    for (i=0; i< customers.c.length; i++){
        if (customers.c[i].id = customerId){
            res.send(customers.c[i]);
        }
    }
});

//setting up the server port
app.listen(3000, function(){
    console.log("Server started on port 3000");
});