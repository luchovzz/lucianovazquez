document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Gracias por contactarme!');
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerText = '⬆️';
    scrollToTopBtn.classList.add('btn', 'btn-secondary');
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.display = 'none';
    
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
