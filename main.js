function preload(){
    img1=loadImage("https://i.postimg.cc/6pSy7dM3/instagram.png");
    img2=loadImage("https://i.postimg.cc/RFxhdv5x/selfie.png");
    img3=loadImage("https://i.postimg.cc/5tCj86rm/professional-photographer.png");
    img4=loadImage("https://i.postimg.cc/4dvdFjs7/no-selfie-stick.png");
    light=loadImage("https://i.postimg.cc/fTVCShsf/searchlight.png");
}
function setup(){
    Canvas=createCanvas(640,480);
    Canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill('blue');
    stroke('#00FFFF');
    rect(60,40,500,15);
    rect(60,425,500,15);
    rect(45,40,15,400);
    rect(585,40,15,400);

    fill('deeppink');
    stroke('#00FF00');
    circle(50,50,80);
    circle(590,50,80);
    circle(50,430,80);
    circle(590,430,80);
    
    image(video,160,120,300,250);
    image(img1,27,25,50,50);
    image(img2,567,25,50,50);
    image(img3,27,407,50,50);
    image(img4,567,407,50,50);
    image(light,85,350,80,80)
}

function take_snapshot(){
    save('frame.png');
}