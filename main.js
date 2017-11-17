const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

let mouseX;
let mouseY;

function map(value, minSrc, maxSrc, minDst, maxDst) {
  return (value - minSrc) / (maxSrc - minSrc) * (maxDst - minDst) + minDst;
}


c.addEventListener('mousemove', function (event) {
  const rect = c.getBoundingClientRect();

  mouseX = event.clientX - rect.x;
  mouseY = event.clientY - rect.y;
});

function genElement(color, leftPos, topPos, handleWidth, handleHeight) {
  ctx.fillStyle = color;
  ctx.fillRect(leftPos, topPos, handleWidth, handleHeight);
}


function drawEverything(leftPos, topPos, handleWidth, handleHeight) {
  genElement('black', 0, 0, c.width, c.height);
  genElement('yellow', leftPos, topPos, handleWidth, handleHeight);
}

function render() {
  const leftPos = (mouseX || c.width / 2) - 50;
  const topPos = c.height - 21;
  const handleWidth = 100;
  const handleHeight = 20;

  drawEverything(leftPos, topPos, handleWidth, handleHeight);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
