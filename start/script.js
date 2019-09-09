let board_pos_x ,canvas, ctx, animation, width_of_board = 100;
const board_pos_y = 450;

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    board_pos_x = canvas.width/2 - 50;
    anime();
}

let draw = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(board_pos_x, board_pos_y,width_of_board,20);
    ctx.beginPath();
    ctx.arc(canvas.width/2-10,canvas.height/2-10,10,0,Math.PI*2,true);
    ctx.fill();
}

function anime(){
    animation = setInterval(function () {
            draw();
    },1);
}

addEventListener('keydown', function (key) {
    switch (key.keyCode) {
        case 37:
            if(board_pos_x>0)board_pos_x-=10;
            break;
        case 39:
            if(board_pos_x+width_of_board<canvas.width)board_pos_x+=10;
            break;
    }
});