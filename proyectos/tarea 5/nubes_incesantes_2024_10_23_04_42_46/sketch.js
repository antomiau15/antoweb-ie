let clouds = []; 

function setup() {
  createCanvas(400, 400);
  //noStroke();
  
  for (let i = 0; i < 10; i++){
    
    clouds [i] = new Cloud (random(width), random(height));
    
  }
  
}

function draw() {
  background(135, 206, 250); //color celeste que se asimila al cielo
  
  for (let i = 0; i < 10; i++){
    
    clouds[i].update();
    clouds[i].display();
  }
  
}

class Cloud {
  
  constructor(x, y){ // 
    
  this.x = x;
  this.y = y;
    
  }
  
  update(){
     this.x++;
    
    if (this.x > width)
      this.x = 0;
  }
    
  display(){ //nubes
    fill(255,150);
    noStroke();
    rect(this.x, this.y, 50, 35);
      
    }
    }
  