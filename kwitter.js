const firebaseConfig = {
  apiKey: "AIzaSyB8IvFHXxjqj7jSxBjWofJomeIRHekHNE8",
  authDomain: "kwitter-d665a.firebaseapp.com",
  databaseURL: "https://kwitter-d665a-default-rtdb.firebaseio.com",
  projectId: "kwitter-d665a",
  storageBucket: "kwitter-d665a.appspot.com",
  messagingSenderId: "306242106019",
  appId: "1:306242106019:web:b8c8edf56bb28558f38516",
  measurementId: "G-5ZY4V0FEKM"
};
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "login_page.html";
}