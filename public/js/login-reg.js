$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$(document).ready(function(){
 
    $("#btnlogin").click(function(){

    	$.ajax({
    		url: 'http://localhost:6789/data',
    		type: 'GET',
    		contentType:'application/json; charset=utf-8',
    		dataType: 'json',
    		success: function(data)
    		{
    			var txtlength = data.length;
    			console.log(data);
    			getdata(data,txtlength)
    		}

    	});
function getdata(data,txtlength)
{
	var username = $('#lfusername').val();
var password = $('#lfpassword').val();

for ( x = 0; x < txtlength ; x++)
{
	var user = data[x].username;
	var pass = data[x].password;
if(username == user && password == pass)
      {

      	    window.document.location.href = '/dashboard';
       sessionStorage.setItem('Logics_loggedin', user);


      }
       else	 if ((username == null || username == "") && ( password== null || password ==""))
  {
    $("#diverror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No Username and Password";
    $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();


  }
  else if (username == null || username == "")
  {
    $("#lblerror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No username";
  $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();


  }
  else if (password == null || password == "")
  {
   $("#lblerror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No Password";
  $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();

  }

  else	if (username != user || password != pass )
  {
  	$("#diverror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "Incorrect Username/Password";
    $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();

  }
    
  


}

}

});
  $("#dboardlogout").click(function(){
 sessionStorage.setItem('Logics_loggedin', 'talas');
        window.document.location.href = '/login';

      });
      $("#lo").click(function(){
 sessionStorage.setItem('Logics_loggedin', 'talas');
        window.document.location.href = '/login?#';

      });

   $("#btnreg").click(function(){
var us = $('#reg-username').val();
var p = $('#reg-password').val();
var pv = $('#re-pass').val();
var valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (us == null || us =="" && p == null || p == "" && pv == null || pv == "")
  {
  document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: No Input.";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
  }
else if (!($('#reg-username').val()).match(valid))
	{
  document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Username must contain at least 6 characters, including UPPER/lowercase and numbers.";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
	}
   else	 if (!($('#reg-password').val()).match(valid))
	{
  document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Password must contain at least 6 characters, including UPPER/lowercase and numbers.";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
	}
	else if ($('#re-pass').val() != $('#reg-password').val())
	{
  document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Password mismatch.";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
	}
	else

	{
	  var arr = { "username": $("#reg-username").val(), "password": $("#reg-password").val()};
	  var user =  $('#reg-username').val();
	  var pass = $('#reg-password').val();
/*$.ajax({
    url: 'http://localhost:6789/register',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
   
    success: function(msg) {   
    }
});
*/
  $.post("http://localhost:6789/register",{username: user,password: pass}, function(data){
	window.location = data.redirectUrl;                      
                });

 
 document.getElementById("regerror").style.color  = "Green";
    document.getElementById("regerror").innerHTML = "Account Added.";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
}
	     
      });
});