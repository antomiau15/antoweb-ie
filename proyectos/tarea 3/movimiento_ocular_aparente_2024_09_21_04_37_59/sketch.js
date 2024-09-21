function setup() {
  createCanvas(400, 400);
  // noLoop();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  // Radio del círculo
  let r = 100;
  
  // Número de puntos en el círculo
  let points = 20;
  
  // Rotación basada en el conteo de cuadros para animación
  let rotationSpeed = 0.01; // para cambiar la velocidad de rotación
  let rotationAngle = sin(frameCount * rotationSpeed) * PI;
  rotate(rotationAngle); // rota todo el sistema de puntos
  
  for (let i = 0; i < points; i++) {
    let angle = TWO_PI / points * i; // ángulo para cada punto
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    
    fill(255,255,0); // color azul para cada uno de los puntos
    noStroke();
    ellipse(x, y, 15, 15); // Dibuja el punto en la posición indicada
    ellipse(x, y, 20, 20);
    
    
      fill(255); // color blanco
  circle(0, 80, 50);
    
    fill(128); // color blanco para el circulo del centro
    circle(0,0,80);
  }
}
