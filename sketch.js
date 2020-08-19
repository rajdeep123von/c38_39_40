var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var A=100;
var Y=100;
var Z=100;
var B=100;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,hudimage,run_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadAnimation("../images/jump.png","../images/landing.png");
  car2_img = loadAnimation("../images/jump.png","../images/landing.png");
  car3_img = loadAnimation("../images/jump.png","../images/landing.png");
  car4_img = loadAnimation("../images/jump.png","../images/landing.png");
  ground = loadImage("../images/ground.png");
  hudimage = loadImage("../images/hud.png");
  
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
/*function spawnhud(){
  if(player.distance%100===0){
    var hud = createSprite(200,200,20,20);
    hud.addImage(hudimage);
    hud.scale = 0.05;
  }}*/
