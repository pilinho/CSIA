function myFunction() {
  var x = document.getElementById("all2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}