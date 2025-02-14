

let express = require('express');
let app = express();

let fs=require("fs");


let port = 3005;


app.get("/products",(req, res) => {

    fs.readFile("index.json","utf-8", (err, data) => {
        if (err) {
            res.send({status:400
            ,message:"File not found"
            });
        } else {
           
            res.send(data);
        }
    });
   
});

app.get("/products/:id",(req, res) => {
    let id = req.params.id;
    fs.readFile("index.json","utf-8", (err, data) => {
        if (err) {
            res.send({status:400
            ,message:"File not found"
            });
        } else {
            dataa=JSON.parse(data)
            let result=dataa.products.filter((val)=>{
                return val.id==id
            })
            // console.log(dataa);
            res.send(result)
            
        }
    });
});
    




app.listen(port, () => {
    console.log("Server is running on port 3005");
});