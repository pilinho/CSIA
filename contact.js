document.querySelector("form").addEventListener("submit", function (e) {
    // prevent form from submitting
    e.preventDefault()

    // get the values from the form
    const fname = document.querySelector("#fname").value
    const lname = document.querySelector("#lname").value
    const country = document.querySelector("#country").value
    const countryText = document.querySelector('#countryText').value
    const state = document.querySelector("#state").value
    const subject = document.querySelector("#subject").value

    // save data to local storage
    localStorage.setItem("fname", fname)
    localStorage.setItem("lname", lname)
    localStorage.setItem("country", country)
    localStorage.setItem('countryText', countryText)
    localStorage.setItem('state',state)
    localStorage.setItem('subject',subject)

    // zero out form
    document.querySelector("form").reset()

    var savedEmail = JSON.parse(localStorage.getItem("fname"))
    var savedPassword = JSON.parse(localStorage.getItem('lname'))
    var savedCountry = JSON.parse(localStorage.getItem('country'))
    var savedcountryText=JSON.parse(localStorage.getItem('countryText'))
    var savedState=JSON.parse(localStorage.getItem('state'))
    var savedSubject=JSON.parse(localStorage.getItem('subject'))
  })
  function myFunction() {
    var x = document.getElementById("all2");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }