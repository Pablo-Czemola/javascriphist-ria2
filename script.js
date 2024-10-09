document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-popup");
    const popup = document.getElementById("popup");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const curiosity = this.getAttribute("data-curiosity");
            popup.textContent = curiosity;
            popup.style.display = "block";
            
            // O pop-up desaparece após 6 segundos
            setTimeout(() => {
                popup.style.display = "none";
            }, 6000);
        });
    });
})