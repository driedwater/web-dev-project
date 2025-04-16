// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function open_calc() {
  document.getElementById('calculatorContainer').style.display = "block";
}

function close_calc() {
  document.getElementById('calculatorContainer').style.display = "none";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


