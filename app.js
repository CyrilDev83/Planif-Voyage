let idFiche = 0;
function newFiche() {
  const newFiche = document.createElement("article");
  newFiche.classList.add("fiche");
  newFiche.id = `${idFiche}`;

  const sectionFiches = document.querySelector(".fiches");

  const titreFiche = document.createElement("h3");
  titreFiche.innerText = ` ${idFiche} titre de la nouvelle fiche`; // nom de la fiche
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.setAttribute("onclick", "supprimerFiche(this)"); // bouton supprimer
  boutonSupprimer.innerText = "X";
  sectionFiches.appendChild(newFiche); // ajout de la fiche

  newFiche.appendChild(titreFiche);
  newFiche.appendChild(boutonSupprimer);

  console.log(newFiche.id);
  idFiche++;
}

function supprimerFiche(bouton) {
  bouton.parentNode.remove();
}

function formulaireNouvelleFiche() {
  const modal = document.getElementById("modal");
  modal.showModal();
  modal.classList.add("modal")
  document
    .getElementById("closeModal")
    .addEventListener("click", () => modal.close());
    
}
