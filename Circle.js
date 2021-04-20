class Circle {
    constructor(_x,_y,_radius,_color,_speed) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.color = _color;
        this.speed = _speed;
        this.image = new Image();
        this.image.src = 'ball2.png';
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2 * Math.PI);
        pen.stroke();
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    drawImg(canvas){
        let pen = canvas.getContext('2d');
        pen.drawImage(this.image,this.x,this.y,50,50);
    }

    moveRight(){
        this.x+=this.speed;
    }
}
