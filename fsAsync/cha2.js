const fs =require("fs");



//  folder created asynchronus way
// fs.mkdir("rameez",(err)=>{
// console.log("folder created");
// })


//  create file asynchronus way
// fs.writeFile("bio.txt","my age is almost 21",(err)=>{
//     console.log("file create")
    
// })

//  append data 
// fs.appendFile(".fsAsync/rameez/bio.txt", " my age exact is 21",(err)=>{
//     console.log("append sucessfullt");
// })

// read file data without buffer data
// fs.readFile("rameez/bio.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
  

// rename file 
// fs.rename("rameez/bio.txt","rameez/mybio.txt",(err)=>{
//   console.log("rename done")
// })
// file deleted
// fs.unlink("rameez/mybio.txt",(err)=>{
//     console.log("file deleted")
// })


fs.rmdir("./rameez",(err)=>{
    console.log("folder delete")
})