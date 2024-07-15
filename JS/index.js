function openMenu() {
  var menuCheck = document.getElementById("menuCheck");
  let navContent = document.getElementById("navigation-content");
  var aElements = navContent.getElementsByTagName("a");

  navContent.style.height = !menuCheck.checked ? "144px" : "0px";
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].style.display = !menuCheck.checked ? "block" : "none";
  }
  menuCheck.checked = !menuCheck.checked;
}
