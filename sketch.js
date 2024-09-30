//function setup() {
//createCanvas(windowWidh, windowHeight);
//background(0);
//}

//function draw() {}

let x, y, d;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Definir la posición y el diámetro del círculo
  x = width / 2;
  y = height / 2;
  d = 100;
}

function draw() {
  background(0);

  // Comprobar si el mouse está dentro del círculo
  let distancia = dist(mouseX, mouseY, x, y);
  if (distancia < d / 2) {
    // Si el mouse está dentro del círculo, cambiar a color rojo
    fill(255, 0, 0);
  } else {
    // Si no, el círculo permanece azul
    fill(0, 0, 255);
  }

  // Dibujar el círculo
  ellipse(x, y, d);

}
