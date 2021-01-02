class Ball {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.2,
            }

        this.jumping = false;
        this.body = Bodies.circle(x, y, 25, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        //console.log('displaying the ball');
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('white');
        ellipse(0, 0, 50, 50);
        pop();
    }

    jump() {
        if (!this.jumping) {

            this.jumping = true;
            Matter.Body.applyForce(this.body, this.body.position, {x: 17, y: -15});

        }
    }
}