class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(425,200);
   car1.addAnimation("car1",car1_img);
     car1.scale = 3;

    car2 = createSprite(650,200);
    car2.addAnimation("car2",car2_img);
    car2.scale = 3;

    car3 = createSprite(880,200);
    car3.addAnimation("car3",car3_img);
   car3.scale = 3;

    car4 = createSprite(1125,200);
    car4.addAnimation("car4",car4_img);
    car4.scale = 3;
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 190 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 240;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        
        cars[index-1].y = y;
        cars[index-1].x = x;
     
       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
       
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          if (keyIsDown(LEFT_ARROW) && index === player.index) {
            cars[index-1].x-= 90;
            cars[index-1].y-= 50 ;}
        }
       
       
      }
     
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
    
      player.update();
 
    }

    if(player.distance > 4200){
      
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);

    }
  this.spawnhud();
  this.spawnhuda();
  this.spawnhudb();
  this.spawnhudc();
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
  spawnhud(){
    A -=600
    var hud = createSprite(425,A,20,20);
    hud.addImage(hudimage);
    hud.scale = 0.05;
  }
  spawnhuda(){
    Y -=600
    var hud = createSprite(650,Y,20,20);
    hud.addImage(hudimage);
    hud.scale = 0.05;
  }
  spawnhudb(){
    Z -=600
    var hud = createSprite(880,Z,20,20);
    hud.addImage(hudimage);
    hud.scale = 0.05;
  }
  spawnhudc(){
    B -=600
    var hud = createSprite(1125,B,20,20);
    hud.addImage(hudimage);
    hud.scale = 0.05;
  }


  }

