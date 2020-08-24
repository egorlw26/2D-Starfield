class Star
{
    constructor()
    {
        this.x = random(-width/2, width/2);
        this.y = random(-height/2, height/2);
        this.z = random(0, width);

        this.oldZ = this.z;
    }

    setSpeed(speed)
    {
        this.speed = speed;
    }

    move()
    {
        this.z -= this.speed;
        if(this.z < 1)
        {
            this.z = random(width);
            this.x = random(-width/2, width/2);
            this.y = random(-height/2, height/2);
            this.oldZ = this.z;
        }
    }

    show()
    {
        let nx = map(this.x / this.z, 0, 1, 0, width);
        let ny = map(this.y / this.z, 0, 1, 0, height);
        let r = map(this.z, 0, width, 16, 0);

        let oldX = map(this.x / this.oldZ, 0, 1, 0, width);
        let oldY = map(this.y / this.oldZ, 0, 1, 0, height);

        this.oldZ = this.z;

        stroke('blue');
        fill('red');
        ellipse(nx, ny, r, r);
        stroke(255);
        line(nx, ny, oldX, oldY);
    }
}