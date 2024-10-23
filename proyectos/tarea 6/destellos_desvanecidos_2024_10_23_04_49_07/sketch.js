let particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0); // Fondo negro

  // Crear nuevas partículas
  if (frameCount % 2 === 0) {
    particles.push(new Particle(random(width), random(height)));
  }

  // Dibujar partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // Eliminar partículas que se vuelven completamente transparentes
    if (particles[i].isOutside() || particles[i].opacity <= 0) {
      particles.splice(i, 1);
    }
  }

  // Figura destacada
  fill(255, 204, 0); // Color amarillo
  noStroke();
  ellipse(width / 2, height / 2, 100, 100); // Círculo en el centro
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.size = random(5, 15);
    this.opacity = 255; // Opacidad inicial
  }

  update() {
    this.position.add(this.velocity);
    this.opacity -= 5; // Disminuir la opacidad
  }

  display() {
    fill(255, 204, 0, this.opacity); // Color amarillo con opacidad
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  isOutside() {
    return (
      this.position.x < 0 || 
      this.position.x > width || 
      this.position.y < 0 || 
      this.position.y > height
    );
  }
}

