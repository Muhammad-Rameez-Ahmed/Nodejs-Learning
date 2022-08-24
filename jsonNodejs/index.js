const fs=require('fs');



const biodata={
    
    name:" Muhammad Rameez Ahmed",
    age:21,
    degree:"Bsc"
    
};


// object data convert into JSON Data
// const jsonData=JSON.stringify(biodata);
// console.log(jsonData )

// JSON data convert into object Data
// const objData=JSON.parse(jsonData)
// console.log(objData)


// TASK   



// 1) Object CONVERT TO JSON
// 2) JSON m convert krny kybad dosri file m add karna hy
// 3) file read krna hy
// 4) again convert JSON into Obj
// 5) console.log()

//    Object  CONVERT TO JSON
const jsonData=JSON.stringify(biodata);

// 2) JSON m convert krny kybad dosri file m add karna hy
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("file create")

})


// 3) file read krna hy
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data)
    console.log(orgData)
})


