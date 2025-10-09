//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore is not null
const CTX = CANVAS.getContext("2d");

// const HEIGHT = 600;
// const WIDTH = 800;

CANVAS.height = window.innerHeight;
CANVAS.width = window.innerWidth;


class Box {
	/**
	 * 
	 * @param { number } x 
	 * @param { number } y 
	 * @param { string } color 
	 */
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;

		this.speed = 5;
		this.width = 50;
		this.height = this.width;

		this.xDirection = 1;
		this.yDirection = 1;

		this.alpha = 1.0;
	}

	draw() {
		CTX.globalAlpha = this.alpha;
		CTX.fillStyle = this.color;
		CTX.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		let top = this.y;
		let bottom = this.y + this.height;
		let left = this.x;
		let right = this.x + this.width;

		if (top < 0) {
			// colliding with top
			this.yDirection = 1;
			this.y = 0;
		} else if (bottom > CANVAS.height) {
			// colliding with bottom
			this.yDirection = -1;
			this.y = CANVAS.height - this.height
		}

		if (left < 0) {
			// colliding with left
			this.xDirection = 1;
			this.x = 0;
		} else if (right > CANVAS.width) {
			// colliding with right
			this.xDirection = -1;
			this.x = CANVAS.width - this.width
		}

		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
}

/**@type {Box[] } */
let boxes = [];

let colors = ["lightBlue", "lightGreen", "lightPink", "lightYellow", "seashellWhite"]
CTX.globalAlpha = 0.2;


for ( let i = 0; i <= 100; i++) {
	let color = colors[Math.floor(Math.random() * colors.length)]
    let box = new Box(0, 0, color);
	box.alpha = 0.6;

	box.width = 200;
	box.height = 50;
	box.x = Math.random() * (CANVAS.width - 100);
	box.y = Math.random() * (CANVAS.height - 100);
    box.speed = Math.random() *5 + 5;
    boxes.push(box);
}


/**
 * 
 * @param { number } timestamp 
 */
function drawLoop(timestamp) {
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);


	  {boxes.forEach((b) => {
        b.draw();
        b.update();
    })
};


	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
};

requestAnimationFrame(drawLoop);

function onResize() {
	CANVAS.height = window.innerHeight
	CANVAS.width = window.innerWidth
}

window.addEventListener("resize", onResize);