 document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('cardSlider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Configuración del slider
    const cardWidth = 320; // Ancho de la tarjeta + gap
    const cardCount = document.querySelectorAll('.card').length;
    
    // Función para mover el slider
    function moveSlider() {
        slider.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }
    
    // Event listeners para botones
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
            moveSlider();
        }
    });
    
    // Detectar el scroll para actualizar el índice
    slider.addEventListener('scroll', () => {
        const scrollPos = slider.scrollLeft;
        currentIndex = Math.round(scrollPos / cardWidth);
    });
});