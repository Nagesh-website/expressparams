

var express = require('express');

var app = express();

app.get('/products', async(req, res) => {

    let data=await fetch("https://fakestoreapi.com/products");
    let dataa=await data.json();
    res.send(dataa);

    if(app.get("/products?cate=")){

    }
    

    
    // res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
