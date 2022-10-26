class Currency {
    constructor() {
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    update(deltaTime) {
        this.x -= this.speedX + this.game.speed;
        // this.y =this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        //if off screen
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}

export class Coin extends Currency {
    constructor(game) {
        super();
        this.game = game;
        this.width = 30;
        this.height = 30;
        this.x = this.game.width;
        this.y = 370;
        this.speedX = 1;
        this.speedY = 0;
        this.maxFrame = 0;
        this.image = document.getElementById('coin');
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}