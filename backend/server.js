const { Server } = require("socket.io");
var five = require("johnny-five");
var board = new five.Board();
const io = new Server({cors:{origin:"*"}})

board.on("ready", function() {

  const lightSensor = new five.Sensor({
    pin: "A0", 
    freq: 300, 
  });
  // Board is now ready

  io.on("connection", (socket) => {
    //Browser is connected
    lightSensor.on("change",function(){
      const sensorValue = this.value
      socket.emit("sensor change",this.value)
    });
    socket.on("up",()=>{
      console.log("up")
    })
    socket.on("down",()=>{
      console.log("down")
    })
    socket.on("left",()=>{
      console.log("left")
    })
    socket.on("right",()=>{
      console.log("right")
    })
    console.log("the browser is connected now to the server.")
  });
});




console.log("Listening to sockets at port 3000")
io.listen(3000);