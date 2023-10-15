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

// Handle keyboard controls

let keysDown = {}

//keyCode is deprecrated and needs to be changed to KeyboardEvent.code
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//Reset the game when the player catches a monster
const reset = function () {
    hero.x = canvas.width / 2
    hero.y = canvas.height / 2

    //Place a monster on the screen somewhere randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64))
    monster.y = 32 + (Math.random() * (canvas.height - 64))
}



