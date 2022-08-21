const fs= require('fs')
// fs.writeFile("read.txt","Today is nice",
// (err)=>{
//     console.log("file is create")
//     console.log(err);

// })


// fs.appendFile("read.txt","i am rameez its  nice",
// (err)=>{
//     console.log("append successfully")

//     console.log(err)
// })

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data)
   
});