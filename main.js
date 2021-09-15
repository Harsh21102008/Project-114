function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function take_snapshot(){
    save('myFilterImage.png')
}