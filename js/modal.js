var modal = document.getElementById('cakeModal');
var images = document.getElementsByClassName('menu-item-image');
var modalImg = document.getElementById("image");


for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}