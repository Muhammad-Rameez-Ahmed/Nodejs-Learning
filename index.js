const fs =require("fs");


// create anew file
// fs.writeFileSync("read.txt","hey it is my first file");


// fs.writeFileSync("read.txt","My name is rameez ahmed and its my first file" )


// fs.appendFileSync("read.txt","Muhammad is my also root name ")


// const buf = fs.readFileSync("read.txt")
// data=buf.toString();
// console.log(data);

fs.renameSync("read.txt","readwrite.txt")
