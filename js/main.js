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

// prendre tous les id des cartes 
let GK = document.getElementById("GK");
let RB = document.getElementById("RB");
let CBR = document.getElementById("CBR");
let CBL = document.getElementById("CBL");
let LB = document.getElementById("LB");
let CMR = document.getElementById("CMR");
let CM = document.getElementById("CM");
let CML = document.getElementById("CML");
let RW = document.getElementById("RW");
let ST = document.getElementById("ST");
let LW = document.getElementById("LW");

// Manipulation des Joueurs (ajouter, modifier)
allCards.forEach(card => {
    card.addEventListener("click", function () {
        modele.style.display = "flex";

    })
});