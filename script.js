
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
    { url: "Image RMT/Yamaha DT 125 LC/Page1.jpg", tags: "page 67 yamaha DT 125 LC Étude technique Pratique Moto " },
    { url: "Image RMT/Yamaha DT 125 LC/Page2.jpg", tags: "étude" },
    { url: "Image RMT/Yamaha DT 125 LC/Page3.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page4.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page5.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page6.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page7.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page8.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page9.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page10.jpg", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page11.png", tags: "yamaha" },
    { url: "Image RMT/Yamaha DT 125 LC/Page12.png", tags: "yamaha" },
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
