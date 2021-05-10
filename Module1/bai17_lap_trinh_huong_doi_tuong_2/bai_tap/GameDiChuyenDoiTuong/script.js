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
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(startLeft, 500)
}

function startRight() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(startRight, 500)
}

function startUp() {
    if (hero.top < window.innerWidth - hero.size) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(startUp, 500)
}

function startDown() {
    if (hero.top < window.innerWidth - hero.size) {
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(startDown, 500)
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

window.onload = docReady();