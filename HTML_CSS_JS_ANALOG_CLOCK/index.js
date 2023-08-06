const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');
const h3 = document.querySelector('.h3');

function setClock() {
  const now = new Date();//updated time
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const h1Degree = (hours % 12) + minutes * 0.5;
  const h2Degree = minutes * 6;
  const h3Degree = seconds * 6;

  h1.style.transform = `rotate(${h1Degree}deg)`;
  h2.style.transform = `rotate(${h2Degree}deg)`;
  h3.style.transform = `rotate(${h3Degree}deg)`;
}
setClock();
setInterval(setClock, 1000)
