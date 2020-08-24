let canv;
let stars = [];
let speedSlider;

function setup()
{
    canv = createCanvas(windowWidth * 0.95, windowHeight * 0.95);
    canv.position(windowWidth/2 - width/2, windowHeight/2 - height/2);

    speedSlider = createSlider(1, 51, 11, 2);
    speedSlider.position(canv.x, canv.y);

    for(let i = 0; i < 250; ++i)
    {
        stars.push(new Star());
    }
}

function draw()
{
    background(0);
    translate(width/2, height/2);
    
    for(let star of stars)
    {
        star.setSpeed(speedSlider.value());
        star.move();
        star.show();
    }
}