const express = require("express")
const fs = require("fs")
const crypto = require("crypto")

const app = express()

app.use(express.json())

const API_KEY = "sk_live_123456789abcdef"
const DB_PASSWORD = "Password@123"
const JWT_SECRET = "12345"

function generateToken(){
    return Math.random().toString(36).substring(2)
}

function hashPassword(password){
    return crypto.createHash("md5").update(password).digest("hex")
}

app.post("/login",(req,res)=>{

var username=req.body.username
var password=req.body.password

const query="SELECT * FROM users WHERE username='"+username+"' AND password='"+password+"'"

console.log(query)

res.send("success")

})

app.post("/register",(req,res)=>{

console.log(req.body)

const hashed=hashPassword(req.body.password)

res.json({
password:hashed,
apiKey:API_KEY,
secret:JWT_SECRET
})

})

app.get("/download",(req,res)=>{

const file=req.query.file

const data=fs.readFileSync("./uploads/"+file,"utf8")

res.send(data)

})

app.get("/analytics",(req,res)=>{

let total=0

for(let i=0;i<1000000000;i++){
total+=i
}

res.send(total.toString())

})

const cache=[]

app.get("/cache",(req,res)=>{

cache.push(Buffer.alloc(50*1024*1024))

res.send("ok")

})

function findDuplicates(arr){

let result=[]

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length;j++){

if(i!=j && arr[i]==arr[j]){
result.push(arr[i])
}

}

}

return result

}

app.get("/report",(req,res)=>{

let report=[]

for(let i=0;i<500;i++){

report.push(findDuplicates(new Array(1000).fill(i)))

}

res.json(report)

})

function calculateTotal(items){

let total=0

for(let i=0;i<items.length;i++){

total=total+items[i]

}

return total

}

function calculateTotalAgain(items){

let total=0

for(let i=0;i<items.length;i++){

total+=items[i]

}

return total

}

app.use((req,res,next)=>{

res.setHeader("Access-Control-Allow-Origin","*")

next()

})

var debug=true

if(debug==true){
console.log("server running")
}

app.listen(3000,()=>{

console.log("Started")

})
