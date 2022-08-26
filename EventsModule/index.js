const EventEmitter=require("events");

const event =new EventEmitter(); 



//  register  for the event to be fixed only one time using
// create an avent emitter instance and register a couple of callbacks
// register for the events with callback parameters
// event.on('saymyname',()=>{
//     console.log("My NAAME IS Muhammad")
// })
// event.on('saymyname',()=>{
//     console.log("My NAAME IS RAMEEZ")
// })

// event.on('saymyname',()=>{
//     console.log("My NAAME IS ahmed")
// })


event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)

})

event.emit('checkpage',200,"ok");




