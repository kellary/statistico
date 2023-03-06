
const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('content');


setTimeout(() => {

  loadingScreen.classList.add('fade-out');
  content.classList.add('fade-in');
}, 1000);
const bg = document.querySelector('.infinite-bg');
let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;

function animateBackground() {
  mouseX += (x - mouseX) * 0.1;
  mouseY += (y - mouseY) * 0.1;
  bg.style.backgroundPosition = `${-mouseX * 0.2}px ${-mouseY * 0.2}px`;
  requestAnimationFrame(animateBackground);
}

animateBackground();

document.addEventListener('mousemove', function(e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
});
