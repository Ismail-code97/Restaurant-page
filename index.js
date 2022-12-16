const riceElement = document.getElementById("rice-lamb");
const pastaElement = document.getElementById("pasta-lamb");
const backDropElement = document.getElementById("backdrop");
const modalElement = document.getElementById("modal");
const mealElement = document.getElementById("meal");

riceElement.addEventListener("click", showRiceConfig);
pastaElement.addEventListener("click", showPastaConfig);
backDropElement.addEventListener("click", backDrop);

function showRiceConfig() {
  backDropElement.style.display = "block";
  modalElement.style.display = "block";
  mealElement.textContent = "Order: Rice and Lamb";
}

function showPastaConfig() {
  backDropElement.style.display = "block";
  modalElement.style.display = "block";
  mealElement.textContent = "Order: Pasta and Lamb";
}

function backDrop() {
  backDropElement.style.display = "none";
  modalElement.style.display = "none";
}
