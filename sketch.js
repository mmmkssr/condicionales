function setup() {
  createCanvas(windowWidth, windowHeight);
  background(191, 144, 117);
  stroke(242);
}

function draw() {
  // Cambiar color de los círculos según la ubicación del mouse
  if (mouseX < width / 3) {
    fill(253, 119, 244); // Rosado con el mouse a la izquierda
  } else if (mouseX < (2 * width) / 3) {
    fill(99, 31, 176); // Morado oscuro con el mouse en el centro
  } else {
    fill(121, 72, 197); // Morado claro con el mouse en la derecha
  }

  // Cambiar la forma al hacer clic

  if (mouseIsPressed) {
    rect(mouseX - 25, mouseY - 25, 100, 100); // cambia a cuadrado
  } else {
    ellipse(mouseX, mouseY, 50, 50); // regresa a la forma original
  }
}
