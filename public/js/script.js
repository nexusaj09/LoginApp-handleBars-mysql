 $(document).ready(function(){
    
    

//login
	 $("#login").click(function(){
   
	
    $.ajax({
      url: 'http://localhost:8080/db',
      type: 'GET',

      contentType: 'application/json; charset=utf-8',
      dataType: 'json',

      success: function(data) {
var lengthx = data.length;
        console.log(data);
        renderHTML(data,lengthx); 
      }
    });


   function renderHTML(data,lengthx){
    var pass =0 ;
    var htmlString = "";

    varuname = $("#loginemail").val();
    varpw = $("#loginpassword").val();

    for( i = 0 ; i < lengthx ; i++){


      var uname = data[i].username;
      var pw = data[i].password;


      if(pw == varpw && uname == varuname)
      {
        
         sessionStorage.setItem('Logics_loggedin', x);
    window.document.location.href = '/dashboard';

        pass++;
      }


    }
    if (pass == 0)
    {
      bootbox.alert("Invalid Credentials");
      $("form")[0].reset();
    }  
  }
	 
});

//register

 $("#register").click(function(){
  

  var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
    if( $("#fname").val()=='' ||$("#lname").val()=='' || $("#registeremail").val()=='' || $("#registerpassword").val()=='' || $("#contact").val()=='')
    {
      bootbox.alert("Please fill all fields...!!!!!!");
    }
                else if($("#fname").val().match("[0-9]+")    )
                {
                    bootbox.alert("Provide Letters for Your Name Only");
                }
                  else if($("#lname").val().match("[0-9]+")    )
                {
                    bootbox.alert("Provide Letters for Your Name Only");
                }
                else if($("#registerpassword").val().length < 8)
                {
                    bootbox.alert("Password Must Be  8 Character and Above")
                }
                else if($("#registerpassword").val() != $("#registerpassword2").val())
                {
                    bootbox.alert("Password Mismatch");
                }
                
    
    else if(!($("#registeremail").val()).match(email))
    {
      bootbox.alert("Please enter valid Email...!!!!!!");
    }
    
    else
    {
     

      var arr = { "username": $("#registeremail").val(), "password": $("#registerpassword").val()};
$.ajax({
    url: 'http://localhost:3000/accts',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
   
    success: function(msg) {
     
    }
});
     bootbox.alert("Welcome To The Eye");
     $("#form")[0].reset();
     $("#second").slideUp("slow",function(){
        $("#first").slideDown("slow");
     });

        }



   });

   });