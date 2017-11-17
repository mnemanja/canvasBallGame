const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

c.width = window.innerWidth - 50;
c.height = window.innerHeight;

let mouseX;
let mouseY;

c.addEventListener('mousemove', function (event) {
  const rect = c.getBoundingClientRect();

  mouseX = event.clientX - rect.x;
  mouseY = event.clientY - rect.y;
});

function genElement(color, leftPos, topPos, handleWidth, handleHeight) {
  ctx.fillStyle = color;
  ctx.fillRect(leftPos, topPos, handleWidth, handleHeight);
}

function generateDestructibleBlocks(amount, row, color) {
  let i = 0;

  for (; i < amount; i++) {
    const width = c.width / 16.5;
    const height = 10;
    const spacing = 10;

    genElement(color, width * (i + 0.6) * 1.5, spacing * (row * 3), width, height);
  }
}

function drawEverything() {
  genElement('black', 0, 0, c.width, c.height);

  generateDestructibleBlocks(10, 1, 'orange');
  generateDestructibleBlocks(8, 2, 'pink');

  const leftPos = (mouseX || c.width / 2) - 50;
  const topPos = c.height - 21;
  const handleWidth = 100;
  const handleHeight = 20;

  genElement('yellow', leftPos, topPos, handleWidth, handleHeight);
}

function render() {
  drawEverything();
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
