var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function Brick(n,x,y,w,h) {
    Brick.num = n;
    Brick.x = 4 + 50 * x ;
    Brick.y = 4 + 20 * y ;
    Brick.w = w;
    Brick.h = h;
}

function makeBrick() {
    for (var i = 1; i < 5; i++) {
        new Brick(i,i,i,50,20);
    }
}


// function randomArc() {
//     ctx.beginPath();
//     ctx.arc(Math.random() * 480, Math.random() * 320, 50 * Math.random(), Math.PI * 2, false);
//     var c1 = Math.floor(Math.random() * 256);
//     var c2 = Math.floor(Math.random() * 256);
//     var c3 = Math.floor(Math.random() * 256);
//     var al = Math.random() * 0.5 + 0.5;
//     var rgba = "rgba(" + c1 + ',' + c2 + ',' + c3 + ',' + al + ')'
//     ctx.fillStyle = rgba
//     ctx.fill();
//     ctx.closePath();
// }

// // var x = setInterval(randomArc, 300);


var canvas = document.getElementById('myCanvas');
var w = canvas.width;
var h = canvas.height;


var ball = {x : w / 2 , y : h - 20, r : 10, dx : 1, dy : -1};
ball.check = function() {
    if (this.x <0 + this.r || this.x > w - this.r){
        this.dx = -this.dx;
    }
    if (this.y <0 +this.r|| this.y >h - this.r) {
        this.dy = -this.dy
    }
}
ball.draw = function() {
    ctx.beginPath();    
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();
    this.check();
    this.x += this.dx;
    this.y += this.dy;
}






////실행 
var draw = function () {
    ctx.clearRect(0,0,w,h);
    ball.draw();
    
}

var id = setInterval(draw,10);