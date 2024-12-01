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
        let playersFiltred = players.filter((v) => v.position == card.getAttribute("id"));
        playersContent.innerHTML = ``;

        playersFiltred.forEach(player => {

            playersContent.innerHTML += `
                <div data-id="${player.id}"  class="playerToAdd relative">
                    <img  class=" w-28" src="../images/card.png" alt="LW">
                    <img class="absolute left-[28%] top-[12%] w-[60px] h-[60px]" src="${player.photo}">
                    <span class=" absolute left-[22%] top-[22%] text-xs text-customText ">${player.rating}</span>
                    <img class="absolute left-[22%] top-[32%] w-[12px] h-[6px]" src="${player.flag}">
                    <img class="absolute left-[23%] top-[38%] w-[12px] h-[6px]" src="${player.logo}">
                    <p class="name whitespace-nowrap absolute left-1/2 -translate-x-1/2 top-[52%] font-extralight text-customText">${player.name}</p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[64%]  font-extralight text-customText">${player.position == 'GK' ? player.diving : player.pace} ${player.position == 'GK' ? 'DIV' : 'PAC'} </p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[69%]  font-extralight text-customText">${player.position == 'GK' ? player.handling : player.shooting} ${player.position == 'GK' ? 'HAN' : 'SHO'}</p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[75%]  font-extralight text-customText">${player.position == 'GK' ? player.kicking : player.passing} ${player.position == 'GK' ? 'KICK' : 'PAS'} </p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[64%]  font-extralight text-customText"> ${player.position == 'GK' ? player.reflexes : player.dribbling} ${player.position == 'GK' ? 'REF' : 'DRI'}</p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[69%]  font-extralight text-customText"> ${player.position == 'GK' ? player.speed : player.defending} ${player.position == 'GK' ? 'SPE' : 'DEF'} </p>
                    <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[75%]  font-extralight text-customText"> ${player.position == 'GK' ? player.positioning : player.physical} ${player.position == 'GK' ? 'POS' : 'PHY'} </p>
                </div> 
            `
        });

        
        
    })
});