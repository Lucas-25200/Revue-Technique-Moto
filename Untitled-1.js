
var xhr = new XMLHttpRequest();
xhr.open("GET", "RMT.pdf", true);
xhr.responseType = "blob";
xhr.onprogress = function(e) {
  var percentComplete = (e.loaded / e.total) * 100;
  console.log(percentComplete + "% téléchargé");
};
xhr.onload = function() {
  console.log("téléchargement terminé!");
};
xhr.send();

var progressBar = document.querySelector(".progress-bar");
xhr.onprogress = function(e) {
  var percentComplete = (e.loaded / e.total) * 100;
  progressBar.setAttribute("aria-valuenow", percentComplete);
  progressBar.setAttribute("aria-valuemin", 0);
  progressBar.setAttribute("aria-valuemax", 100);
  progressBar.style.width = percentComplete + "%";
};