$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$(document).ready(function(){
 
    $("#btnlogin").click(function(){

		$.getJSON('lime.json',function(data)
		{
			var af = data;
			var  s = JSON.stringify(af);
			var o = JSON.parse(s);
      var result = '';
      $.each(o, function (i, item){
        result += 'username = ' + item.username + '<br/>';
        result += 'passsword = ' + item.password + '<br/>';
 var x = document.getElementById("lfusername").value;
	 var y = document.getElementById("lfpassword").value;

    if ((x == null || x == "") && (y == null || y ==""))
  {
    $("#diverror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No Username and Password";
    $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();


    return true;}
  else if (x == null || x == "")
  {
    $("#lblerror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No username";
  $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();

    return true;
  }
  else if (y == null || y == "")
  {
   $("#lblerror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "No Password";
  $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();
    return true;
  }
else if ((x != '' || x != null) && (y != '' || y != null)){
    if (x == item.username && y == item.password){
    
     sessionStorage.setItem('Logics_loggedin', x);
    window.document.location.href = '/dashboard';

 
    	return false;
    }
  else	if (x != item.username && y != item.password)
  {
  	$("#diverror").removeClass("hid");
           document.getElementById("lblerror").style.color  = "red";
    document.getElementById("lblerror").innerHTML = "Incorrect Username/Password";
    $("#diverror").show();
     $('#diverror').delay(2000).fadeOut();
    return true;
  }
    
  }
      });
      $('#try').html(result);	
    });
    });
     $("#btnreg").click(function(){
 /*    	 if($("#reg-password").val() == ""  ) {
  
         $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Enter Password";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();

      }

    	 if($("#reg-username").val() == "") {
  $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Username cannot be blank";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
         }

  var  re = /^[a-zA-Z0-9]+$/;
    if($("#reg-username").val().match(re)) {
        document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Username must contain only letters, numbers and underscores!";
  $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
    }
     if($("#reg-password").val() != "" && $("#reg-password").val() == $("#re-pass").val()) {
      if($("#reg-password").val().length < 6) {
         $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Password must contain at least six characters!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();

      }
      if($("#reg-password").val() == $("#reg-username").val()) {
              $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Password must be different from Username!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();

      }
      re = /[0-9]/;
      if($("#reg-password").val().match(re)) {
          $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: password must contain at least one number (0-9)!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
  
      }
      re = /[a-z]/; 
      if($("#reg-password").val().match(re)) {
           $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: password must contain at least one lowercase letter (a-z)!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();

      }
      re = /[A-Z]/;
      if($("#reg-password").val().match(re)) {
           $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: password must contain at least one uppercase letter (A-Z)!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();

      }
    } else if ($("#re-pass").val() != $("#reg-password").val()){
         $("#regerror").removeClass("hid");
           document.getElementById("regerror").style.color  = "red";
    document.getElementById("regerror").innerHTML = "Error: Password Doesn't match!";
      $("#regerror").show();
     $('#regerror').delay(2000).fadeOut();
 
    }
    else if ($("#reg-username") != null && $("#re-pass") == $("#reg-password"))
    {
      
      var data = [];
      data[0] = {"username": $("#reg-username").value , "password": $("#reg-password")};
      var tempdate = [];
      for(var index = 0; index < data.length;index++)
      {
        tempdate.push(data);
      }
    }

*/
   if ($("#reg-username").val() != null && $("#re-pass").val() == $("#reg-password").val())
    {
      alert("asdasd");  
      var data = [];
      data[0] = {"username": $("#reg-username").val(), "password": $("#reg-password").val()};
      var tempdate = [];
      for(var index = 0; index < data.length;index++)
      {
        data.push();
      }
    }

    });
  $("#dboardlogout").click(function(){
 sessionStorage.setItem('Logics_loggedin', 'talas');
        window.document.location.href = '/login#';

      });
 });
 