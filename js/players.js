const joueurContainer = document.getElementById("joueurs-carte");
const positionPlayer = document.getElementById("PositionPlayer");
const statPlayers = document.getElementById("playersSta");

let divForm = null;
let hanForm = null;
let kickForm = null ;
let refForm = null ;
let speForm = null ;
let posForm = null ;

let phyForm = null ;
let defForm = null ;
let driForm = null ;
let pasForm = null ;
let shoForm = null ;
let pacForm = null ;

const nomForm = document.getElementById("name");
const photoForm = document.getElementById("photo");
const nationalityForm = document.getElementById("nationality");
const flagForm = document.getElementById("flag");
const clubForm = document.getElementById("club");
const logoForm = document.getElementById("logo");
const ratingForm = document.getElementById("rating");

// stocker data dans localStorage

if (!localStorage.getItem("players")) {
    const jsonFile = "../data.json";
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du fichier JSON");
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("players", JSON.stringify(data.players))
        })
        .catch(error => console.error("Erreur :", error));
}
const players = JSON.parse(localStorage.getItem("players"));

    function afficherJoueur(){
        joueurContainer.innerHTML = ``;
        players.forEach(player => {
            joueurContainer.innerHTML += `
                <div data-nat="${player.nationality}" data-club="${player.club}" id="playersCarte" class=" relative">
                    <img id="LW" class=" w-60" src="../images/card.png" alt="LW">
                    <img class="photo absolute left-[29%] top-[15%] w-[120px] h-[120px]" src="${player.photo}">
                    <span class="rating absolute left-[24%] top-[22%] text-[22px] text-customText ">${player.rating}</span>
                    <P class="position absolute left-[24%] top-[32%] text-customText ">${player.position}</p>
                    <img class="logo absolute left-[26%] top-[40%] w-[16px] h-[16px]" src="${player.logo}">
                    <p class=" name whitespace-nowrap absolute left-[28%] top-[52%] font-extralight text-customText">${player.name}</p>
                    <img class="flag absolute left-[65%]  top-[53%] font-extralight w-[18] h-[18px] " src="${player.flag}" alt="">
                    <p class="pace diving text-[6px] whitespace-nowrap absolute left-[28%] top-[64%]  font-extralight text-customText">${player.position == 'GK' ? player.diving : player.pace} ${player.position == 'GK' ? 'DIV' : 'PAC'} </p>
                    <p class="shooting handling text-[6px] whitespace-nowrap absolute left-[28%] top-[69%]  font-extralight text-customText">${player.position == 'GK' ? player.handling : player.shooting} ${player.position == 'GK' ? 'HAN' : 'SHO'} </p>
                    <p class="passing kicking text-[6px] whitespace-nowrap absolute left-[28%] top-[75%]  font-extralight text-customText">${player.position == 'GK' ? player.kicking : player.passing} ${player.position == 'GK' ? 'KICK' : 'PAS'} </p>
                    <p class="dribbling reflexes dribbling text-[6px] whitespace-nowrap absolute left-[57%] top-[64%]  font-extralight text-customText">${player.position == 'GK' ? player.reflexes : player.dribbling} ${player.position == 'GK' ? 'REF' : 'DRI'} </p>
                    <p class="speed defending text-[6px] whitespace-nowrap absolute left-[57%] top-[69%]  font-extralight text-customText">${player.position == 'GK' ? player.speed : player.defending} ${player.position == 'GK' ? 'SPE' : 'DEF'} </p>
                    <p class="positioning physical text-[6px] whitespace-nowrap absolute left-[57%] top-[75%]  font-extralight text-customText">${player.position == 'GK' ? player.positioning : player.physical} ${player.position == 'GK' ? 'POS' : 'PHY'} </p>
                </div> 
            `  

        });
    }