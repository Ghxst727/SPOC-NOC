document.addEventListener('DOMContentLoaded', function() {
  var icon = document.getElementById("glance_legend");
  var popup = document.getElementById("glance-popup");
  var span = document.getElementsByClassName("close")[0];

  icon.onclick = function() {
    popup.style.display = "block";
  }

  span.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
});
