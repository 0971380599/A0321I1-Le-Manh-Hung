/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };

    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('ok: ' + this.left);

    };

    this.moveUp = function () {
        this.top -= this.speed;
        console.log('ok: ' + this.top);

    };

    this.moveDown = function () {
        this.top += this.speed;
        console.log('ok: ' + this.top);
    };
}

let speed = parseInt(prompt("nhập tốc độ muốn đi :"));
var hero = new Hero('pikachu2.png', 20, 20, 200, speed);
document.getElementById('game').innerHTML = hero.getHeroElement();

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            startLeft();
            break;
        case 39:
            startRight();
            break;
        case 38:
            startUp();
            break;
        case 40:
            startDown();
            break;
    }
}

function startLeft() {
    clearTimeout();
    hero.moveLeft();
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function startRight() {
    clearTimeout();
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function startUp() {
    hero.moveUp();
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function startDown() {
    hero.moveDown();
    document.getElementById('game').innerHTML = hero.getHeroElement();

}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

window.onload = docReady();