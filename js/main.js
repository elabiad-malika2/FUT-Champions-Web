let allCards = document.querySelectorAll(".card");
let modele = document.getElementById("popupModal");
let playersContent = document.getElementById("playersContainer");
let indexPlayer = null ;

// For menu :
const menuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
    });
