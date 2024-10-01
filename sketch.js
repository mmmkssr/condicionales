function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  //Cambiar el color del círculo dependiendo de la posición del mouse
  if (mouseX < width / 3) {
    fill(255, 0, 0); // Rojo en la izquierda
  } else if (mouseX < (2 * width) / 3) {
    fill(0, 255, 0); // Verde en el centro
  } else {
    fill(0, 0, 255); // Azul en la derecha
  }

  // Cambiar el tamaño del círculo al hacer clic
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 100, 100); // Círculo grande
  } else {
    ellipse(mouseX, mouseY, 50, 50); // Círculo pequeño
  }
}
