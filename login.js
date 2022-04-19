document.querySelector("form").addEventListener("submit", function (e) {
    // prevent form from submitting
    e.preventDefault()

    // get the values from the form
    const email = document.querySelector("#myEmail").value
    const password = document.querySelector("#myPassword").value

    // save data to local storage
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    // zero out form
    document.querySelector("form").reset()

    // get age from local storge
    var savedEmail = JSON.parse(localStorage.getItem("email"))
    var savedPassword = JSON.parse(localStorage.getItem("password"))

  })


  function myFunction() {
  var x = document.getElementById("all2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}