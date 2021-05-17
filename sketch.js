var helicopterIMG, helicopterSprite, packageSprite,packageIMG,man;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("images/helicopter.png")
	packageIMG=loadImage("images/package.png")
    manIMG=loadImage("images/man.png")
    starsIMG=loadImage("images/stars.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var man=createSprite(600,550,20,50)
	man.addAnimation("man",manIMG);
    man.scale=0.2
    
	var stars=createSprite(750,80,20,50)
	stars.addAnimation("stars",starsIMG);
    stars.scale=1
    

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("#00ff00");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("#00ff00");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("#00ff00");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#010324");
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.x=helicopterSprite.x


  drawSprites();
  
  
  if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-1;
   }
   if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+1;
   }
   
  if(keyDown("RIGHT_ARROW")){

  }


   textSize(50)
  textFont("Broadway");
  fill("#00ffff");
  stroke("#000099");
  strokeWeight(5);
 
 
  text("Save Solidiers!!!",150,100)


}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   console.log("down")
	   Matter.Body.setStatic(packageBody, false);
		  
	   
	   
	 }
   }
   
