// <!--created by durgesh mahajan-->
const firebaseConfig = {
  apiKey: "AIzaSyBDn9nBsght2dkj7TshrzOgEuS6_wHFQUQ",
  authDomain: "cloud-lab-9445b.firebaseapp.com",
  projectId: "cloud-lab-9445b",
  storageBucket: "cloud-lab-9445b.appspot.com",
  messagingSenderId: "331422269161",
  appId: "1:331422269161:web:20bc53e4279ac04570ba78",
  measurementId: "G-4CQLWQH66F"
};

var app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

function emailLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("User loggedin successfully!!");
        window.location.href = "/notes.html";
        console.log('Logged in:', userCredential.user);
      })
      .catch((error) => {
        alert("User doesn't exists!!");
        console.error('Login error:', error.message);
      });
}

function googleLogin() {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuth)
      .then((userCredential) => {
        alert("User loggedin successfully!!");
        // redirect to dashboard
        window.location.href = "/notes.html";
        console.log('Logged in:', userCredential.user);
      })
      .catch((error) => {
        alert("User doesn't exists!!");
        console.error('Login error:', error.message);
      });
}
  

function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("User registered successfully!!");
        console.log('Signed up:', userCredential.user);
    })
    .catch((error) => {
      alert("User already exists!!");
        console.error('Signup error:', error.message);
    });
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            alert("Logged out successfully!!");
            console.log('Logged out');
        })
        .catch((error) => {
          alert("User lougout successfully!!");
            console.error('Logout error:', error.message);
        });
}

// added by suraj
function addNote() {
  const note = document.getElementById("noteInput").value;
  console.log(note);
  
  // Prevent form submission
  event.preventDefault();
  
  // Add note to Firebase Firestore
  db.collection("notes").add({
      note: note,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then((docRef) => { 
    alert("Note added successfully!!");
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("noteInput").value = "";
      
      // Retrieve notes from Firebase Firestore
  })
  .catch((error) => {
    alert("Error adding document: ", error);
      console.error("Error adding document: ", error);
  });
}
// added by suraj
function retrieveNotes() {
  // Retrieve notes from Firebase Firestore
  db.collection("notes")
      .orderBy("timestamp", "desc")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // Access each note's data
              var noteData = doc.data();

              // create a new div element and add note data to it
              var noteElement = document.createElement("div");
              noteElement.innerHTML = noteData.note;
              noteElement.className = "note";
              noteElement.style.backgroundColor = "lightblue";
              noteElement.style.padding = "10px";
              noteElement.style.margin = "10px";
              noteElement.style.borderRadius = "10px";


              document.getElementById("notes").appendChild(noteElement);
              
              
              // Display or process the note data as desired
              console.log("Note: ", noteData.note);
          });
      })
      .catch((error) => {
          console.error("Error retrieving notes: ", error);
      });
}