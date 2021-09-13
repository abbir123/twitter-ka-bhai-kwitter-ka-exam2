function addUser(){ 
    userName=document.getElementById("UserName").value 
    localStorage.setItem("UserName" , userName) 
    window.location="kwitter_room.html"
  }