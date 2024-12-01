let allCards = document.querySelectorAll(".card");
let modele = document.getElementById("popupModal");
let playersContent = document.getElementById("playersContainer");
let indexPlayer = null ;

// For menu



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
let LW = document.getElementById("LW")

let terrainPlayers = JSON.parse(localStorage.getItem("terrainPlayers")) || [];


let players = JSON.parse(localStorage.getItem("players"));

function contentPlayerTerrain(player) {
    return `
                
            <div data-id="${player.id}" class="playerId relative">
                <img class="w-24 sm:w-28 md:w-32 lg:w-36" src="../images/card.png" alt="LW">
                <img class="absolute left-[28%] sm:left-[24%] top-[12%] sm:top-[10%] w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]" src="${player.photo}">
                <span class="absolute left-[22%] sm:left-[20%] top-[22%] sm:top-[18%] text-[10px] sm:text-xs md:text-sm text-customText">${player.rating}</span>
                <img class="absolute left-[22%] sm:left-[20%] top-[32%] sm:top-[28%] w-[10px] sm:w-[12px] h-[6px]" src="${player.flag}">
                <img class="absolute left-[23%] sm:left-[21%] top-[38%] sm:top-[34%] w-[10px] sm:w-[12px] h-[6px]" src="${player.logo}">
                <p class="name whitespace-nowrap absolute left-1/2 -translate-x-1/2 top-[52%] sm:top-[48%] text-[8px] sm:text-xs md:text-sm font-extralight text-customText">${player.name}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[28%] sm:left-[25%] top-[64%] sm:top-[60%] font-extralight text-customText">${player.position == 'GK' ? player.diving : player.pace} ${player.position == 'GK' ? 'DIV' : 'PAC'}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[28%] sm:left-[25%] top-[69%] sm:top-[65%] font-extralight text-customText">${player.position == 'GK' ? player.handling : player.shooting} ${player.position == 'GK' ? 'HAN' : 'SHO'}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[28%] sm:left-[25%] top-[75%] sm:top-[70%] font-extralight text-customText">${player.position == 'GK' ? player.kicking : player.passing} ${player.position == 'GK' ? 'KICK' : 'PAS'}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[57%] sm:left-[54%] top-[64%] sm:top-[60%] font-extralight text-customText">${player.position == 'GK' ? player.reflexes : player.dribbling} ${player.position == 'GK' ? 'REF' : 'DRI'}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[57%] sm:left-[54%] top-[69%] sm:top-[65%] font-extralight text-customText">${player.position == 'GK' ? player.speed : player.defending} ${player.position == 'GK' ? 'SPE' : 'DEF'}</p>
                <p class="text-[6px] sm:text-[8px] md:text-xs absolute left-[57%] sm:left-[54%] top-[75%] sm:top-[70%] font-extralight text-customText">${player.position == 'GK' ? player.positioning : player.physical} ${player.position == 'GK' ? 'POS' : 'PHY'}</p>
            </div>

            `;
    
            
};

function showPlayersTer() {
    terrainPlayers.forEach(player => {
        if (player.position == "GK") {
            GK.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "RB") {
            RB.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "LB") {
            LB.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "CBR") {
            CBR.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "CBL") {
            CBL.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "CM") {
            CM.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "CML") {
            CML.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "CMR") {
            CMR.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "LW") {
            LW.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "RW") {
            RW.innerHTML = contentPlayerTerrain(player);
        }
        if (player.position == "ST") {
            ST.innerHTML = contentPlayerTerrain(player);
        }
    })
    let playerId = document.querySelectorAll(".playerId");

    playerId.forEach(element=>{
        console.log()
        element.addEventListener("click",function () {
            console.log("id",element.dataset.id);
            indexPlayer = null;
            terrainPlayers.forEach((player,index)=>{
                if (player.id == element.dataset.id) {
                    indexPlayer=index;
                }
                
            })
            console.log('aza', indexPlayer)
            
            
            
        })
    })
}

// Manipulation des Joueurs (ajouter, modifier)
allCards.forEach(card => {
    card.addEventListener("click", function () {
        showPlayersTer();
    // console.log("aaa", card.getAttribute("id"));
        modele.style.display = "flex";
        
        let playersFiltred = players.filter((v) => v.position == card.getAttribute("id"));

       // console.log("bbb", playersFiltred);
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
        })
        let playerAddCard = document.querySelectorAll(".playerToAdd");
        playerAddCard.forEach(player => {
            player.addEventListener("click", function () {
               // console.log("id", player.dataset.id);
                let i = null;
                players.forEach((p, index) => {
                    if (p.id == player.dataset.id) {
                        i = index;
                    }
                })
                let exist = null;
                terrainPlayers.forEach(playeTer => {
                    if (player.dataset.id == playeTer.id) {
                        exist = true;
                    }
                })
                if (exist) {
                    modele.style.display = "none";
                } else {
                    if (indexPlayer !== null)
                    {
                        terrainPlayers.splice(indexPlayer, 1)
                        

                    }
                    
                    terrainPlayers.push(players[i]);
                    localStorage.setItem("terrainPlayers", JSON.stringify(terrainPlayers));
                    showPlayersTer();
                    indexPlayer = null;
                    modele.style.display = "none";
                }


            })
        })


    });

})
showPlayersTer();