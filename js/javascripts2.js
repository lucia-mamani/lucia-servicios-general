const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
let jahat;
let slideNumber = calculateSlideNumber(); // Inicializa slideNumber basado en el ancho actual

// Función para calcular slideNumber basado en el ancho actual de la pantalla
function calculateSlideNumber() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1200) {
    return 5; // Mostrar 5 columnas en pantallas grandes (>= 1200px)
  } else if (screenWidth >= 992) {
    return 4; // Mostrar 4 columnas en pantallas medianas (992px - 1199px)
  } else if (screenWidth >= 768) {
    return 3; // Mostrar 3 columnas en pantallas pequeñas (768px - 991px)
  } else if (screenWidth >= 576) {
    return 2; // Mostrar 2 columnas en pantallas muy pequeñas (576px - 767px)
  } else {
    return 1; // Mostrar 1 columna en pantallas extra pequeñas (< 576px)
  }
}

left.addEventListener('click', function () {
  if (jahat === -1) {
    slider.appendChild(slider.firstElementChild);
    jahat = 1;
  }
  jahat = 1;
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(' + (100 / slideNumber) + '%)';
});

right.addEventListener('click', function () {
  jahat = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(' + (-100 / slideNumber) + '%)';
});

slider.addEventListener('transitionend', function () {
  if (jahat === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (jahat === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(function () {
    slider.style.transition = 'all 0.5s';
  });
});

// Redimensionar dinámicamente slideNumber cuando cambia el tamaño de la pantalla
window.addEventListener('resize', function () {
  slideNumber = calculateSlideNumber();
});
