const firebaseConfig = {
  apiKey: "AIzaSyCXYpkIjTP3jE0zP9wwYTcjPtxQ2R7rVCs",
  authDomain: "contact-form-98aaa.firebaseapp.com",
  databaseURL: "https://contact-form-98aaa-default-rtdb.firebaseio.com",
  projectId: "contact-form-98aaa",
  storageBucket: "contact-form-98aaa.appspot.com",
  messagingSenderId: "262518834960",
  appId: "1:262518834960:web:9015eaedccc32584ba0795"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000); 
  //   reset the form
  document.getElementById("contactForm").reset();
}
const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
  function myFunction() {
    var x = document.getElementById("all2");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }