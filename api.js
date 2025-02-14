
let express = require("express");

let app=express()
let port=3008

app.get("/",(req,res)=>{

    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-001",
          "messages": [
            {"role": "user", "content": "What is the capital of telangana"}
          ],
          "top_p": 1,
          "temperature": 1,
          "repetition_penalty": 1
        })
      }).then((val)=>{
        return val.json()
      }).then((val)=>{
        res.send(val)
      })

})

app.listen(port,()=>{
    console.log("server is running sucessfully");
    
})