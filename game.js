//Create the canvas
const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 512
canvas.height = 480
canvas.style.border = '2px solid black'
document.body.appendChild(canvas)

// Background image
let bgReady = false
let bgImage = new Image()
bgImage.onload = function() {
    bgReady = true
}

bgImage.src = "images/background.png"

// Game Objects
let hero = {
    speed: 256, //movement in pixels per second
    x: 0,
    y: 0
}

let monster = {
    x: 0,
    y: 0
}

let monstersCaught = 0