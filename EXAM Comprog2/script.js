var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);
}

function book() {
  alert("Successful")
}

function myFunction() {
  var x = document.getElementById("mheads");
  if (x.className === "nav") 
  {
    x.className += " responsive";
  } 
  else 
  {
    x.className = "nav";
  }
    }