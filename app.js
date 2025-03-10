let idFiche = 0;
function newFiche() {
  const sectionFiches = document.querySelector(".fiches");
  const newFiche = document.createElement("article");

  newFiche.classList.add("fiche");
  newFiche.id = `${idFiche}`;
  newFiche.setAttribute("onclick", "toggleFiche(this)");

  const contenuFiche = document.createElement("div");
  contenuFiche.classList.add("contenu-fiche");
  const titreFiche = document.createElement("h3");
  titreFiche.innerText = ` ${idFiche} titre de la nouvelle fiche`; // nom de la fiche
  const detail = document.createElement("p");
  detail.classList.add("detail");
  detail.innerText = "je suis un détail";
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

  console.log(newFiche.id);
  idFiche++;
}

function supprimerFiche(bouton) {
  bouton.parentNode.remove();
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
