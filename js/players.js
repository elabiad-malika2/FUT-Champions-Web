const joueurContainer = document.getElementById("joueurs-carte");
const positionPlayer = document.getElementById("PositionPlayer");
const statPlayers = document.getElementById("playersSta");
const form = document.getElementById("formulaire");

let divForm = null;
let hanForm = null;
let kickForm = null;
let refForm = null;
let speForm = null;
let posForm = null;

let phyForm = null;
let defForm = null;
let driForm = null;
let pasForm = null;
let shoForm = null;
let pacForm = null;

const nomForm = document.getElementById("name");
const photoForm = document.getElementById("photo");
const nationalityForm = document.getElementById("nationality");
const flagForm = document.getElementById("flag");
const clubForm = document.getElementById("club");
const logoForm = document.getElementById("logo");
const ratingForm = document.getElementById("rating");


function AfficherStatistique() {
    if (positionPlayer.value == "GK") {
        statPlayers.innerHTML = `
                <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">Diving</label>
                                <input id="div" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">handling</label>
                                <input id="han" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">Kicking</label>
                                <input id="kick" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">Reflexes</label>
                                <input id="ref" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">Speed</label>
                                <input id="spe" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">Positioning</label>
                                <input id="pos" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                        </div>
            `
    } else {
        statPlayers.innerHTML = `
            <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">PAC</label>
                                <input id="pac" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">SHO</label>
                                <input id="sho" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">PAS</label>
                                <input id="pas" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">DRI</label>
                                <input id="dri" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">DEF</label>
                                <input id="def" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                            <div class="flex items-center gap-3">
                                <label  class="text-sm font-semibold text-white">PHY</label>
                                <input id="phy" 
                                    class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="number" min="1" max="100">
                            </div>
                        </div>
            `
    }
    // Gardient
    divForm = document.getElementById("div");
    hanForm = document.getElementById("han");
    kickForm = document.getElementById("kick");
    refForm = document.getElementById("ref");
    speForm = document.getElementById("spe");
    posForm = document.getElementById("pos");

    // Player
    pacForm = document.getElementById("pac");
    shoForm = document.getElementById("sho");
    pasForm = document.getElementById("pas");
    driForm = document.getElementById("dri");
    defForm = document.getElementById("def");
    phyForm = document.getElementById("phy");


}

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




function AfficherJoueur() {
    joueurContainer.innerHTML = ``;
    players.forEach(player => {
        joueurContainer.innerHTML += `
                <div data-id="${player.id}" data-nat="${player.nationality}" data-club="${player.club}" id="playersCarte" class=" relative">
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
    modifierJoueur();



}
function modifierJoueur() {
    const playersCarte = document.querySelectorAll("#playersCarte");
    const btn = document.getElementById("editDelete");
    const btnAdd = document.getElementById("btnAdd");
    let data=null;




    playersCarte.forEach(element => {
        element.addEventListener("click", function () {
            btn.style.display = "flex";
            btnAdd.style.display = "none";



            data = {
                id: parseInt(element.dataset.id),
                photo: element.querySelector(".photo").getAttribute("src"),
                rating: parseInt(element.querySelector(".rating").textContent),
                position: element.querySelector(".position").textContent,
                logo: element.querySelector(".logo").getAttribute("src"),
                name: element.querySelector(".name").textContent,
                flag: element.querySelector(".flag").getAttribute("src"),
                nationality: element.dataset.nat,
                club: element.dataset.club,
            }
            console.log(data);

            if (data.position == "GK") {
                data.diving = parseInt(element.querySelector(".diving").textContent);
                data.handling = parseInt(element.querySelector(".handling").textContent);
                data.kicking = parseInt(element.querySelector(".kicking").textContent);
                data.reflexes = parseInt(element.querySelector(".reflexes").textContent);
                data.speed = parseInt(element.querySelector(".speed").textContent);
                data.positioning = parseInt(element.querySelector(".positioning").textContent);

            } else {
                data.pace = parseInt(element.querySelector(".pace").textContent);
                data.shooting = parseInt(element.querySelector(".shooting").textContent);
                data.passing = parseInt(element.querySelector(".passing").textContent);
                data.dribbling = parseInt(element.querySelector(".dribbling").textContent);
                data.defending = parseInt(element.querySelector(".defending").textContent);
                data.physical = parseInt(element.querySelector(".physical").textContent);
            }


            nomForm.value = data.name;
            photoForm.value = data.photo;
            ratingForm.value = data.rating;
            positionPlayer.value = data.position;
            logoForm.value = data.logo;
            flagForm.value = data.flag;
            nationalityForm.value = data.nationality;
            clubForm.value = data.club;
            AfficherStatistique()

            if (data.position == "GK") {
                divForm.value = data.diving;
                hanForm.value = data.handling;
                kickForm.value = data.kicking;
                refForm.value = data.reflexes;
                speForm.value = data.speed;
                posForm.value = data.positioning;

            } else {
                phyForm.value = data.physical;
                defForm.value = data.defending;
                driForm.value = data.dribbling;
                pasForm.value = data.passing;
                shoForm.value = data.shooting;
                pacForm.value = data.pace
            }



        })
    });
        const btnEdit = document.getElementById("btnEdit");
        btnEdit.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("aaa",data);
            let  joueur = {
                id: data.id,
                photo: photoForm.value,
                rating: ratingForm.value,
                position: positionPlayer.value,
                logo: logoForm.value,
                name: nomForm.value,
                flag: flagForm.value,
                nationality: nationalityForm.value,
                club: clubForm.value,
            }
            console.log(joueur)
            if (joueur.position == "GK") {
                joueur.diving = divForm.value;
                joueur.handling = hanForm.value;
                joueur.kicking = kickForm.value;
                joueur.reflexes = refForm.value;
                joueur.speed = speForm.value;
                joueur.positioning = posForm.value;

            } else {
                joueur.pace = pacForm.value;
                joueur.shooting =shoForm.value ;
                joueur.passing = pasForm.value ;
                joueur.dribbling = driForm.value;
                joueur.defending = defForm.value ;
                joueur.physical =phyForm.value ;
            }

            console.log("jjj",joueur);
            let i;
            players.forEach((p,index) => {
                if(p.id == data.id)
                {
                   i  = index
                }
            })
            console.log('player before', players[i])
            console.log('player after', joueur)

             players[i]=joueur;
             console.log('player edited', players[i])

            localStorage.setItem("players",JSON.stringify(players));
            AfficherJoueur();
            form.reset();
            
            

        }, { once: true})
        const btnDelete = document.getElementById("btnDelete")
        btnDelete.addEventListener("click",function(e){
            e.preventDefault();
            let i = null;
            players.forEach((p,index)=>{
                if (p.id == data.id) {
                    i = index;
                }

            })
            players.splice(i,1);
            localStorage.setItem("players",JSON.stringify(players));
            AfficherJoueur();
        })

        
}






AfficherJoueur();

positionPlayer.addEventListener("change", function () {
    AfficherStatistique();

    const pacForm = document.getElementById("pac");
    const shoForm = document.getElementById("sho");
    const pasForm = document.getElementById("pas");
    const driForm = document.getElementById("dri");
    const defForm = document.getElementById("def");
    const phyForm = document.getElementById("phy");

    function addPlayer(e) {
        e.preventDefault();


        let playerAjouter = {
            name: nomForm.value,
            photo: photoForm.value,
            nationality: nationalityForm.value,
            position: positionPlayer.value,
            flag: flagForm.value,
            club: clubForm.value,
            logo: clubForm.value,
            rating: ratingForm.value,
        }

        if (playerAjouter.position == "GK") {
            playerAjouter.diving = divForm.value;
            playerAjouter.handling = hanForm.value;
            playerAjouter.kicking = kickForm.value;
            playerAjouter.reflexes = refForm.value;
            playerAjouter.speed = speForm.value;
            playerAjouter.positioning = posForm.value;

        } else {
            playerAjouter.pace = pacForm.value;
            playerAjouter.shooting = shoForm.value;
            playerAjouter.passing = pasForm.value;
            playerAjouter.dribbling = driForm.value;
            playerAjouter.defending = defForm.value;
            playerAjouter.physical = phyForm.value;

        }
        players.push(playerAjouter);
        console.log("sssss", playerAjouter);
        localStorage.setItem('players', JSON.stringify(players))

        AfficherJoueur();
        



    }

    document.getElementById('btnAdd').addEventListener('click', (event) => addPlayer(event));

})

