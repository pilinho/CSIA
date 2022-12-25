  
function myFunction() {
  var x = document.getElementById("all2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // My web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIGMRcUQllSVQ5GuGSpxsgfDscZPJdFho",
    authDomain: "login-csia.firebaseapp.com",
    projectId: "login-csia",
    storageBucket: "login-csia.appspot.com",
    messagingSenderId: "749933452197",
    appId: "1:749933452197:web:e12a43e3b11699652da64c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  sighup.addEventListener('click', (e) =>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
        username: username,
        email: email
      })
      alert('Usuário criado com sucesso!');
    // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    // ..
      });
  })

  login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value; 
     
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        const dt = new Date();
        update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })

        alert('Usuário acessado!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
      });
  });
