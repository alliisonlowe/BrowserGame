export class Platform {
    constructor(game) {
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 20;
    }
    draw(context) {
  context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update() {

    }
}