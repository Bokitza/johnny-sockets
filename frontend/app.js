const socket = io("http://localhost:3000");
const sensorElement = document.getElementById("sensor")




// this is what happens when the server sends sensor data   
socket.on("sensor change",(sensorData)=>{
    sensorElement.innerText = sensorData
    if(sensorData>450){
document.body.style.background="cyan"
    }
    else{
        document.body.style.background="blue"
    }
})

function clickUp(){
    socket.emit("up")
}
function clickDown(){
    socket.emit("down")
}
function clickRight(){
    socket.emit("right")
}
function clickLeft(){
    socket.emit("left")
}
