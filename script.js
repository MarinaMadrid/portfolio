/*BARRA DE NAVEGACIÓN*/
let lastScrollTop = 0;
const navBar = document.getElementById("nav");

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        navBar.style.transform = "translateY(0)";
    } else if (currentScroll <= 100) {
        navBar.style.transform = "translateY(-100%)";
    }
    
    lastScrollTop = currentScroll;
});

/*BOTÓN DE FLECHA HACIA ARRIBA*/
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
// Suavizar el desplazamiento
document.getElementById("scrollToTop").addEventListener("click", function(event){
    event.preventDefault(); // Evita el salto instantáneo
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});
