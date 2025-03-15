let idFiche = 1;
let numeroJour = 1;
let voyage = [];

function creationDraggable() {
  const draggables = document.querySelectorAll(".draggable");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text", event.target.dataset.index);
      event.target.style.opacity = "0.5"; // Effet visuel
    });

    draggable.addEventListener("dragend", (event) => {
      event.target.style.opacity = "1";
    });
  });
}

function creationDropzone() {
  const dropzones = document.querySelectorAll(".dropzone");
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", (event) => {
      event.preventDefault(); // Permet le drop
      dropzone.style.backgroundColor = "lightgreen";
    });

    dropzone.addEventListener("dragleave", (event) => {
      dropzone.style.backgroundColor = "lightgray";
    });

    dropzone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropzone.style.backgroundColor = "lightgray";

      // Récupère l'élément déplacé
      const draggedIndex = event.dataTransfer.getData("text");
      const draggedElement = document.querySelector(
        `[data-index='${draggedIndex}']`
      );

      return draggedElement
    });
  });
}

const sectionFiches = document.querySelector(".voyage");

// Ajouter un nouveau jour

function nouveauJour() {
  const jour = document.createElement("section");
  sectionFiches.appendChild(jour);
  jour.classList.add("jours", "dropzone");
  jour.id = numeroJour;
  jour.innerHTML = `<h3>jour ${numeroJour}</h3>
<button  class="bouton-fiche" id="openModal" onclick= formulaireNouvelleFiche(this)>Add</button>`;
  numeroJour++;
  console.log(jour);
creationDropzone();
}

function newFiche() {
  // récuperation des data du formulaire
  const dataFiche = recupDataFormulaire();

  // création de la fiche
  const newFiche = document.createElement("article");
  newFiche.classList.add("fiche", "draggable");
  newFiche.id = `${idFiche}`;
  newFiche.setAttribute("onclick", "toggleFiche(this)");
  newFiche.setAttribute("draggable", "true");
  newFiche.setAttribute("data-id", `${idFiche}`);
  
  const contenuFiche = document.createElement("div");
  contenuFiche.classList.add("contenu-fiche");
  
  // Titre de la fiche
  const titreFiche = document.createElement("h3");
  titreFiche.innerText = ` ${idFiche} ${dataFiche.titreFiche}`; // nom de la fiche
  
  // Detail de la fiche
  const detail = document.createElement("p");
  detail.classList.add("detail");
  detail.innerText = `${dataFiche.detail}`;
  sectionFiches.appendChild(newFiche); // ajout de la fiche
  
  // Durée de la fiche
  const duree = document.createElement("p");
  duree.classList.add("duree", "detail");
  duree.innerText = `la durée est de ${dataFiche.duree} H`;
  
  // bouton supprimer
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.setAttribute("onclick", "supprimerFiche(this)"); // bouton supprimer
  boutonSupprimer.innerText = "X";
  boutonSupprimer.classList.add("bouton-cache");
  
  // bouton modifier
  const boutonModifier = document.createElement("button");
  boutonModifier.setAttribute("onclick", "supprimerFiche(this)"); // bouton supprimer
  boutonModifier.innerText = "...";
  boutonModifier.classList.add("bouton-cache");
  boutonModifier.id = "btn-modifier";
  
  // insertion des elements
  contenuFiche.append(titreFiche, detail, duree);
  newFiche.append(contenuFiche, boutonModifier, boutonSupprimer);
  
  // Récupère le jour cible depuis le dataset du modal
  const modal = document.getElementById("modal");
  const jourIndex = parseInt(modal.dataset.jourId);
  const jours = document.querySelectorAll(".jours");
  const jourCible = jours[jourIndex];
  
  jourCible.appendChild(newFiche);
  idFiche++;
  ajouterFiche(dataFiche);
  creationDraggable();
  console.log(newFiche.classList);
}

// function d'ajout de la fiche au tableau voyage
function ajouterFiche(nouvelleFiche) {
  voyage.push(nouvelleFiche);
  console.log(voyage);
}

// fonction de suppression de la fiche par le bouton et aussi du tableau voyage
function supprimerFiche(bouton) {
  bouton.parentNode.remove();
  voyage.splice(bouton.parentNode, 1);
  console.log(voyage);
}

// fonction d'envoie du formulaire et création de la fiche
function formulaireNouvelleFiche(bouton) {
  const modal = document.getElementById("modal");
  modal.showModal();

  const jour = bouton.closest(".jours");
  modal.dataset.jourId = Array.from(
    document.querySelectorAll(".jours")
  ).indexOf(jour);

  document
    .getElementById("closeModal")
    .addEventListener("click", () => modal.close());
}

function toggleFiche(element) {
  element.classList.toggle("ouverte"); // Ajoute ou enlève la classe "ouverte"
}
function recupDataFormulaire() {
  const titreFiche = document.getElementById("titre-fiche").value;
  const detail = document.getElementById("detail").value;
  const typeFiche = document.getElementById("type-de-fiche").value;
  const duree = document.getElementById("duree").value;
  const dataFiche = { typeFiche, titreFiche, detail, duree };
  console.log(dataFiche);
  return dataFiche;
}

// // Initialise la carte et centre sur une position (ex: Paris)
// var map = L.map('map').setView([48.8566, 2.3522], 13);

// // Ajoute une couche de tuiles (fond de carte)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
// }).addTo(map);

// // Ajoute un marqueur interactif
// var marker = L.marker([48.8566, 2.3522]).addTo(map)
//     .bindPopup('Hello, Paris !')
//     .openPopup();
