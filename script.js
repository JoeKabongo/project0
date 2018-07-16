window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
  var myWidth = window.innerWidth;
  document.getElementById('dimensions').innerHTML = myWidth;
}
