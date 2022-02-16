var firebaseConfig = {
  apiKey: "AIzaSyCsrFzdF4IujmimuaJZzsMbXxmBLZ6EXco",
  authDomain: "kwitter-84571.firebaseapp.com",
  databaseURL: "https://kwitter-84571-default-rtdb.firebaseio.com",
  projectId: "kwitter-84571",
  storageBucket: "kwitter-84571.appspot.com",
  messagingSenderId: "116456662873",
  appId: "1:116456662873:web:850d277b92cf7ca2750e48",
  measurementId: "G-LV6XG5M6ED"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome" + "&nbsp" + username + "!";
function addroom() 
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "storing room name"    
})
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";







}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {;snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Names" + Room_names);
 row = "<div class='room_name' id= " + Room_names +" onclick='Redirect_to_room_name(this.id)'>#"+ Room_names + "</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function Redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}  
function logout() 
{
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "index.html";
}