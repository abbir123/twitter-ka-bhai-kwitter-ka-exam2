var firebaseConfig = {
    apiKey: "AIzaSyDHgQ26VcRHjoVyWUuptzJOYHv_ZyogLlI",
    authDomain: "kwitter-2e6ee.firebaseapp.com",
    databaseURL: "https://kwitter-2e6ee-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e6ee",
    storageBucket: "kwitter-2e6ee.appspot.com",
    messagingSenderId: "366258150090",
    appId: "1:366258150090:web:f06ac15e87f11bef013233"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   userName=localStorage.getItem("UserName");
   console.log(userName)
  document.getElementById("userName").innerHTML="welcome " + userName;
  
  function addRoom(){
        room_name=document.getElementById("roomName").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding roomname"
        })
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_room.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room names:"+ Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();
