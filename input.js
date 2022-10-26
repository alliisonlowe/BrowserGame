export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e => {
            console.log(e.key, this.keys);
            if ((e.key === 'S' ||
                e.key === 'W' ||
                e.key === 'D' ||
                e.key === 'A' ||
                e.key === 's' ||
                e.key === 'w' ||
                e.key === 'd' ||
                e.key === 'a' ||
                e.key === 'Enter'
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'S' ||
                e.key === 'W' ||
                e.key === 'D' ||
                e.key === 'A' ||
                e.key === 's' ||
                e.key === 'w' ||
                e.key === 'd' ||
                e.key === 'a' ||
                e.key === 'Enter'
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        })
    }
}