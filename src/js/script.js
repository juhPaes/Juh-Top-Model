const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlides()   
 {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = 'block';   

}

// Chamar a função para iniciar o slider
showSlides();

// Configurar um intervalo para trocar os slides automaticamente
setInterval(showSlides, 3000); // Troca a cada 2 segundos