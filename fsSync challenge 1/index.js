const fs =require("fs");


// fs.mkdirSync("rameez");
// fs.writeFileSync("rameez/bio.txt","mY ROOT NAME IS MUHAMMAD rameez");
// fs.writeFileSync("rameez/bio.txt","i am rameez ahmed")
// fs.appendFileSync("rameez/bio.txt", 'hello')

// const buf= fs.readFileSync("rameez/bio.txt");
// const data=buf.toString();
// console.log(data)

// fs.renameSync("rameez/bio.txt" ,"rameez/mybio.txt");

// fs.unlinkSync("rameez/mybio.txt");
fs.rmdirSync("rameez");