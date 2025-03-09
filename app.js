let idFiche = 0;
function newFiche() {
  const newFiche = document.createElement("article");
  newFiche.classList.add("fiche");
  newFiche.id = `${idFiche}`;

  const sectionFiches = document.querySelector(".fiches");
  newFiche.innerHTML = "<h1>hello je suis une new fiche</h1>"; // nom de la fiche
  newFiche.innerHTML =
    '<button onclick="supprimerFiche(this)">Supprimer</button>'; // bouton supprimer

  sectionFiches.appendChild(newFiche); // ajout de la fiche

  console.log(newFiche.id);
  idFiche++;
}

function supprimerFiche(bouton) {
  bouton.parentNode.remove();
}
