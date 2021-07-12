//Registering for the event to be fired only one time using once.
// create am event emitter instance and register a couple of callbacks
//Registering for event with callback parameters
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkpage", (sc, msg)=>{
    console.log(`status code is ${sc} and the msg is ${msg}`);
});

// event.on("sayMyName", ()=>{
//     console.log("your name is vishal verma");
// });

// event.on("sayMyName", ()=>{
//     console.log("your name is vishuu soni");
// });

// event.on("sayMyName", ()=>{
//     console.log("your name is vishal soni");
// });

// event.emit("sayMyName");
event.emit("checkpage", 200, "ok");