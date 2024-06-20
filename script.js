
function redirectToResults() {
  const query = document.getElementById("search-input").value.trim();
  if (query) {
    window.location.href = `results.html?search=${encodeURIComponent(query)}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search");

  if (query) {
    document.getElementById(
      "results"
    ).innerHTML = `<p>Résultats pour : <strong>${decodeURIComponent(
      query
    )}</strong></p>`;
    displayResults(query);
  } else {
    document.getElementById("results").innerHTML =
      "<p>Aucun terme de recherche fourni.</p>";
  }
});

function displayResults(query) {
  const images = [
    { url: "Image RMT/Yamaha DT 125 LC/Page1.jpg", tags: "page 67 yamaha DT 125 LC Étude technique Pratique Moto 125cm3 type 10v" },
    { url: "Image RMT/Yamaha DT 125 LC/Page2.jpg", tags: "page 68 Présentation Generale yamaha DT 125 LC" },
    { url: "Image RMT/Yamaha DT 125 LC/Page3.jpg", tags: "page 69 Présentation Generale yamaha DT 125 LC" },
    { url: "Image RMT/Yamaha DT 125 LC/Page4.jpg", tags: "page 70 Présentation Generale yamaha DT 125 LC" },
    { url: "Image RMT/Yamaha DT 125 LC/Page5.jpg", tags: "page 71 vue fantome yamaha DT 125 LC" },
    { url: "Image RMT/Yamaha DT 125 LC/Page6.jpg", tags: "page 72 vue fantome yamaha DT 125 LC" },
    { url: "Image RMT/Yamaha DT 125 LC/Page7.jpg", tags: "page 73 caractèristique generales et reglages yamaha DT 125 LC 125cm3 type 10v kw ch cylindrée puissance max tr/mn Moteur piston distribution culasse cylindre embiellage et arbre d'equilibrage carter-moteur" },
    { url: "Image RMT/Yamaha DT 125 LC/Page8.jpg", tags: "page 74 caractèristique generales et reglages yamaha graissage alimentation carburation allumage equipement electrique" },
    { url: "Image RMT/Yamaha DT 125 LC/Page9.jpg", tags: "page 75 caractèristique generales et reglages yamaha eclairage et signalisation transmission embayage boite de vitesses mecanisme de selection transmition secondaire" },
    { url: "Image RMT/Yamaha DT 125 LC/Page10.jpg", tags: "page 76 caractèristique generales et reglages yamaha kick-starter partie cycle cadre fourche avant suspention arriere frein avant frein arriere roues" },
    { url: "Image RMT/Yamaha DT 125 LC/Page12.jpg", tags: "page 78 Particularités technique yamaha coupe du moteur" },
    { url: "Image RMT/Yamaha DT 125 LC/Page13.jpg", tags: "page 79 Particularités technique yamaha systeme d'equilibrage circuit de refroidissement du moteur l'admission a clapets " },
    { url: "Image RMT/Yamaha DT 125 LC/Page11.jpg", tags: "page 77 Particularités technique yamaha courbes moteur" },
    { url: "Image RMT/Yamaha DT 125 LC/Page14.jpg", tags: "page 80 Particularités technique yamaha chambre de l'yeis systeme d'admission d'echappement " },
    { url: "Image RMT/Yamaha DT 125 LC/Page15.jpg", tags: "page 81 Particularités technique yamaha transmission coupe de la boite de vitesses repartiteur automatique auto des cable de gaz pompe a huile" },
    { url: "Image RMT/Yamaha DT 125 LC/Page16.jpg", tags: "page 82 Particularités technique yamahal'allumage electronique " },
    { url: "Image RMT/Yamaha DT 125 LC/Page17.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page18.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page19.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page20.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page21.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page22.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page23.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page24.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page25.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page26.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page27.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page28.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page29.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page30.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page31.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page32.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page33.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page34.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page35.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page36.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page37.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page38.jpg", tags: "page *****" },
    { url: "Image RMT/Yamaha DT 125 LC/Page39.jpg", tags: "page *****" },

  ];

  const resultsContainer = document.getElementById("results");
  const filteredImages = images.filter((image) =>
    image.tags.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredImages.length > 0) {
    filteredImages.forEach((image) => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = image.tags;
      imgElement.style.width = "100%"; // Ajustez la largeur ici
      imgElement.style.height = "auto"; // Ajustez la hauteur ici, ou utilisez une valeur spécifique
      resultItem.appendChild(imgElement);
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML += "<p>Aucun résultat trouvé.</p>";
  }
}
