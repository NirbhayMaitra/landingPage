var array=Array();
var x = 0;
function addFeedback(){
array[x]=document.getElementById("feedback").value;
x++;
document.getElementById("feedback").value="";
document.getElementById("result").innerHTML="<h3>Successfully Added Feedback Details!</h3>";
}
function displayFeedback(){
  var e="";
  for(var y=1;y<array.length+1;y++)
  {
      e=e+"Feedback "+y+"<br>"+array[y-1]+"<br>";
  }
  document.getElementById("result").innerHTML="<h2>Added Successfully</h2>"+e;
}
  function validation(){
    var usr = document.getElementById('user').value;
    var eml = document.getElementById('email').value;

    if(usr==""){
      document.getElementById('username').innerHTML=" ** Please fill the username field";
      return false;
    }
    if((usr.length<=2) || (usr.length>=20)){
      document.getElementById('username').innerHTML=" ** User length must be 2 and 20";
      return false;
    }
    if(!isNAN(usr)){
      document.getElementById('username').innerHTML=" ** Only characters are allowed";
      return false;
    }
    if(eml==""){
      document.getElementById('mail').innerHTML="Please fill the email field";
      return false;
    }
  }
