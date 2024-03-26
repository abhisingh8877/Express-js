const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const port=3000;
const users=[
  {
    name:"john",
    kidneys:[
    {
      healthy:false
    }  ]
  }
];
app.get('/',(req,res)=>{
  const johnKidney=users[0].kidneys;
  const numofkidney=johnKidney.length;
  let numberofhealthykidney=0;
  for(let i=0;i<numofkidney;i++)
  {
    if(johnKidney[i].healthy)
    numberofhealthykidney++;

  }
  const numberofUnhealthyKidney=numofkidney-numberofhealthykidney;
  res.json(
    {
      numofkidney,
      numberofhealthykidney,
      numberofUnhealthyKidney
    }
  )
  
})
app.post("/",function(req,res){
  const isHealthy=req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done!"
  })
})
app.put("/",function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++)
  {
     users[0].kidneys[i].healthy=true;
  }
  res.json({})
})
app.delete("/",function(req,res){
  const newKidney=[];
  for(let i=0;i<users[0].kidneys.length;i++)
  {
    if(users[0].kidneys[i].healthy)
    {
      newKidney.push({
        healthy:true
      })
    }
  }
  users[0].kidneys=newKidney;
  res.json({msg:"done!"});
})
// function calculatesum(n)
// {
//   let ans=0;
//   for(let i=1;i<=n;i++)
//   {
//     ans+=i;
//   }
//   return ans;
// }
// app.get('/',(req,res)=>{
//     const n=req.query.n;
//     const val=calculatesum(n);
//     res.send(val.toString());
// })


// app.get('/route-handler',function(req,res){
//     res.json({
//         name:"Abhishek",
//         age:21
//     })
// })
// app.get('/conversation',(req,res)=>{
//     console.log(req.headers["authorization"]);
//     console.log(req.body)
//     res.send("<strong>hi there</strong>");

// })
// app.post('/postdata',(req,res)=>{
    
//     console.log(req.body)
//     console.log(req.query.message);
//     res.send({
//         msg:"2+ 2=4"
//     })
// })
app.listen(port);