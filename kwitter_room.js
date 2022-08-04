
const firebaseConfig = {
      apiKey: "AIzaSyDkPbR4efBe87bLZnAAxalk27G6ejyDRhQ",
      authDomain: "redsocial-d91e8.firebaseapp.com",
      databaseURL: "https://redsocial-d91e8-default-rtdb.firebaseio.com",
      projectId: "redsocial-d91e8",
      storageBucket: "redsocial-d91e8.appspot.com",
      messagingSenderId: "131944476687",
      appId: "1:131944476687:web:bac3da7787a5c6ceba737a"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="¡Bienvenido/a " + user_name + "!";
    
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
  //Inicia código
    console.log("Room Name - " + Room_names);
    row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  //Termina código
  });});}
  getData();

  function redirectToRoomName(name)
{     
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}