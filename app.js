



let idFiche = 0;
let voyage = []


function newFiche() {
  
  // récuperation des data du formulaire
  const dataFiche = recupDataFormulaire()
  
  // création de la fiche
  const sectionFiches = document.querySelector(".fiches");
  const newFiche = document.createElement("article");
  newFiche.classList.add("fiche");
  newFiche.id = `${idFiche}`;
  newFiche.setAttribute("onclick", "toggleFiche(this)");

  const contenuFiche = document.createElement("div");
  contenuFiche.classList.add("contenu-fiche");
  const titreFiche = document.createElement("h3");
  titreFiche.innerText = ` ${idFiche} ${dataFiche.titreFiche}`; // nom de la fiche
  const detail = document.createElement("p");
  detail.classList.add("detail");
  detail.innerText = `${dataFiche.detail}`;
  sectionFiches.appendChild(newFiche); // ajout de la fiche

  // bouton supprimer
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.setAttribute("onclick", "supprimerFiche(this)"); // bouton supprimer
  boutonSupprimer.innerText = "X";
  boutonSupprimer.id = "boutonSupprimer";


  // insertion des elements
  contenuFiche.appendChild(titreFiche);
  contenuFiche.appendChild(detail);
  newFiche.appendChild(contenuFiche);
  newFiche.appendChild(boutonSupprimer);

 

  idFiche++;
  ajouterFiche(dataFiche)
}

// function d'ajout de la fiche au tableau voyage
function ajouterFiche(nouvelleFiche) {
  voyage.push(nouvelleFiche)
  console.log(voyage)

}

// fonction de suppression de la fiche par le bouton et aussi du tableau voyage
function supprimerFiche(bouton) {
  bouton.parentNode.remove();
  voyage.splice(bouton.parentNode, 1)
  console.log(voyage)
}

function formulaireNouvelleFiche() {
  const modal = document.getElementById("modal");
  modal.showModal();

  document
    .getElementById("closeModal")
    .addEventListener("click", () => modal.close());
}

function toggleFiche(element) {
  element.classList.toggle("ouverte"); // Ajoute ou enlève la classe "ouverte"
}
function recupDataFormulaire () {
  const titreFiche = document.getElementById("titre-fiche").value
  const detail = document.getElementById("detail").value
  const typeFiche = document.getElementById("type-de-fiche").value
  const duree = document.getElementById("duree").value
  const dataFiche = {typeFiche, titreFiche, detail, duree}
  console.log(dataFiche)
  return dataFiche
}

