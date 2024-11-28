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