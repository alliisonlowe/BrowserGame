import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { Coin } from './currency.js';
import {Platform} from './platform.js'

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.Player = new Player(this);
            this.input = new InputHandler();
            this.coins = [];
            this.coinTimer = 0;
            this.coinInterval = 1000;
        }
        update(deltaTime) {
            this.background.update();
            this.Player.update(this.input.keys, deltaTime);
            //create coins
            if (this.coinTimer > this.coinInterval) {
                this.addCoin();
                this.coinTimer = 0;
            } else {
                this.coinTimer += deltaTime
            }
            this.coins.forEach(coin => {
                coin.update(deltaTime);
                if (coin.markedForDeletion) this.coins.splice(this.coins.indexOf(coin), 1);
            })
        }
        draw(context) {
            this.background.draw(context);
            this.Player.draw(context);

            this.coins.forEach(coin => {
                coin.draw(context);
            })
        }
        addCoin() {
            this.coins.push(new Coin(this));
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

