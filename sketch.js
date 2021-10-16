var path;
var boy;
var leftBoundary;
var rightBoundary;
var pathImg;
var boyImg;
var i;

function preload(){

  pathImg = loadImage("path.png");
  //loadImage de path (camino)
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  //loadAnimation de boy (niño)
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200,50,50);
 //crear sprite de path (camino) 
 path.addImage(pathImg);
//agregar imagen de path
path.velocityY=7;
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

boy = createSprite(200,320,50,50);
//crear sprite de boy (niño)
boy.addAnimation("runner",boyImg);
//agregar animación para boy
boy.scale=0.08;

leftBoundary=createSprite(0,0,100,800);  
// crear  left Boundary (límite izquierdo)
leftBoundary.visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

rightBoundary=createSprite(410,0,100,800);
//crear right Boundary (límite derecho)
rightBoundary.visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background("white");
  boy.x = World.mouseX;
  // boy moviéndose en el eje X con el mouse
  
  edges = createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
