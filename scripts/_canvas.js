// //@ts-check

// /** @type { HTMLCanvasElement } */
// //@ts-ignore This is an HTML Canvas
// const CANVAS = document.getElementById("game-canvas");

// /**@type { CanvasRenderingContext2D } */
// //@ts-ignore is not null 
// const CTX = CANVAS.getContext("2d");

// const HEIGHT = 600;
// const WIDTH = 800;

// CANVAS.height = HEIGHT;
// CANVAS.width = WIDTH;

// class Box {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;

//         this.speed = 5;
//         this.width = 50;
//         this.height = this.width;

//         this.xDirection = 1;
//         this.yDirection = 1;
//     }

// }

// let currentTimestamp = 0;

// let box1 = {
//     x: 0,
//     y: 0,
//     speed: 5,
//     xDirection: 5,
//     yDirection: 5,
//     width: 50,
//     draw: function() {
//      CTX.fillStyle = "lightBlue";
//      CTX.fillRect(this.x, this.y, this.width, this.width);
//     },
//     update: function() {
//         let top = this.y;
//         let bottom = this.y + this.width;
//         let left = this.x;
//         let right = this.x + this.width;

//         if (top < 0) {
//             //colliding with top
//             this.yDirection = 5;
//         } else if (bottom > HEIGHT) {
//             //colliding with bottom
//             this.yDirection = -5;
//         }

//         if (left < 0) {
//             //colliding with left
//             this.xDirection = 5;
//         } else if (right > WIDTH) {
//             //colliding with right
//             this.xDirection = -5;
//         }

//         this.x += this.xDirection;
//         this.y += this.yDirection;
//     },
// };

// let box2 = {
//     x: 0,
//     y: 550,
//     speed: 5,
//     xDirection: 5,
//     yDirection: 5,
//     width: 50,
//     draw: function() {
//      CTX.fillStyle = "lightGreen";
//      CTX.fillRect(this.x, this.y, this.width, this.width);
//     },
//     update: function() {
//         let bottom = this.y + this.width;
//         let right = this.x + this.width;
//         let top = this.y;
//         let left = this.x;

//         if (top < 0) {
//             //colliding with top
//             this.yDirection = 5;
//         } else if (bottom > HEIGHT) {
//             //colliding with bottom
//             this.yDirection = -5;
//         }

//         if (left < 0) {
//             //colliding with left
//             this.xDirection = 5;
//         } else if (right > WIDTH) {
//             //colliding with right
//             this.xDirection = -5;
//         }

//         this.x += this.xDirection;
//         this.y += this.yDirection;
//     },
// };

// let box3 = {
//     x: 750,
//     y: 0,
//     speed: 5,
//     xDirection: 5,
//     yDirection: 5,
//     width: 50,
//     draw: function() {
//      CTX.fillStyle = "lightPink";
//      CTX.fillRect(this.x, this.y, this.width, this.width);
//     },
//     update: function() {
//         let top = this.y;
//         let bottom = this.y + this.width;
//         let left = this.x;
//         let right = this.x + this.width;

//         if (top < 0) {
//             //colliding with top
//             this.yDirection = 5;
//         } else if (bottom > HEIGHT) {
//             //colliding with bottom
//             this.yDirection = -5;
//         }

//         if (left < 0) {
//             //colliding with left
//             this.xDirection = 5;
//         } else if (right > WIDTH) {
//             //colliding with right
//             this.xDirection = -5;
//         }

//         this.x += this.xDirection;
//         this.y += this.yDirection;
//     },
// };

// let box4 = {
//     x: 750,
//     y: 550,
//     speed: 5,
//     xDirection: 5,
//     yDirection: 5,
//     width: 50,
//     draw: function() {
//      CTX.fillStyle = "lightYellow";
//      CTX.fillRect(this.x, this.y, this.width, this.width);
//     },
//     update: function() {
//         let bottom = this.y + this.width;
//         let right = this.x + this.width;
//         let top = this.y;
//         let left = this.x;

//         if (top < 0) {
//             //colliding with top
//             this.yDirection = 5;
//         } else if (bottom > HEIGHT) {
//             //colliding with bottom
//             this.yDirection = -5;
//         }

//         if (left < 0) {
//             //colliding with left
//             this.xDirection = 5;
//         } else if (right > WIDTH) {
//             //colliding with right
//             this.xDirection = -5;
//         }

//         this.x += this.xDirection;
//         this.y += this.yDirection;
//     },
// };

// function drawLoop(timestamp){
//     CTX.clearRect(0, 0, WIDTH, HEIGHT);
    
//     let elapsedTime = timestamp - currentTimestamp;
//     currentTimestamp = timestamp;

//     box1.draw();
//     box1.update();

//     box2.draw();
//     box2.update();

//     box3.draw();
//     box3.update();

//     box4.draw();
//     box4.update();

    
//     //CTX.fillStyle = "lightBlue";
//     //CTX.fillRect(x, y, 10, 10);

//     //CTX.fillStyle = "lightGreen";
//     //CTX.fillRect(x, y, 10, 10);

//     //CTX.fillStyle = "lightPink";
//     //CTX.fillRect(x, y, 10, 10);

//     //CTX.fillStyle = "lightYellow";
//     //CTX.fillRect(x, y, 10, 10);

//     // x = x + 1;
//     // x += 1;
//     //x++; // add 1 to the current value of x
//     //y++;

//     console.log(elapsedTime);
//     requestAnimationFrame(drawLoop);
// }

// requestAnimationFrame(drawLoop);