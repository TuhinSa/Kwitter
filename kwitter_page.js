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
    user_name = localStorage.getItem("username");      
     room = localStorage.getItem("room_name");
function getData() {firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         names = message_data['name'];
         message = message_data['message'];
         likes = message_data['like'];
         name_with_tag = "<h4>" + names + "<img class = 'user_tick' src ='tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
         like_button  = "<button class= 'btn btn-warning' id= " + firebase_message_id+" value = "+ likes +" onclick = 'updatelikes(this.id)'>"
         span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'> Likes : "  + likes + "</span></button><hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
        
         document.getElementById("output").innerHTML += row;

} });  }); }
 getData();
 function updatelikes(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room).child(message_id).update({
		like : updated_likes  
	 });

}
function send()
{
msg = document.getElementById("message").value;
firebase.database().ref(room).push({
name : user_name,
message : msg,
like: 0
});
document.getElementById("message").value = "";
}
function logout() 
{
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "index.html";
}


