let depthSlider;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  noFill(); // Desactiva el relleno
  angleMode(DEGREES); // Modo de ángulo en grados

  // Crear el slider para controlar la profundidad de la recursión
  depthSlider = createSlider(1, 10, 5, 1);
  depthSlider.position(10, height + 10); // Posiciona el slider
}

function draw() {
  background(0); // Fondo negro
  translate(width / 2, height / 2); // Centro del lienzo

  let depth = depthSlider.value(); // Obtener valor del slider
  drawSquares(200, depth); // Dibuja los cuadrados con el tamaño inicial de 200
}

function drawSquares(size, depth) {
  if (depth > 0) { // Profundidad de la recursión
    strokeWeight(5); // Grosor del trazo
    stroke(random(255), random(255), random(255)); // Color aleatorio
    rectMode(CENTER);
    rect(0, 0, size, size); // Dibuja el cuadrado

    let newSize = size * 0.7; // Tamaño del cuadrado hijo
    drawSquares(newSize, depth - 1); // Llama a la función recursiva
  }
}