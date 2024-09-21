function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
    //cuadrado más grande
  rect(0,10,370,390);
  fill("#f0e68c");
  stroke("khaki")
  
  rect(0,20,355,375);
   fill("#fffacd");
  
  //cuadrado
  rect(0,25,340,360);
  fill("#f0e68c")
  
  rect(0,55,310,320);
  fill("#fffacd");

  //cuadrado
  rect(0,70,280,260);
   fill("#f0e68c");
  
  //cuadrado
  rect(0,90,270,225);
   fill("#fffacd");
  
  //cuadrado
  rect(0,110,210,190);
  fill("#deb887");
  
  //rectángulos interiores completos
  rect(10,120,180,160);
  fill("#fffacd");

  
  rect(20,130,140,140);
  fill("#f0e68c");
 
  rect(30,150,100,100);
   fill("#fffacd");
  
  rect(40,170,50,60)
  fill("#f0e68c");
  
  line(35,180,90,180);
  line(35,220,90,220);
  line(35,200,90,200);
  line(65,150,65,230);
  
  //cuadrado interior mas pequeño
  rect(55,190,20,20);
}