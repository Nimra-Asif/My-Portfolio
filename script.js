function send()
{
var namee = document.getElementById('username').value;
var mail = document.getElementById('email').value;
var num = document.getElementById('phone').value;
var mess = document.getElementById('message').value;

if( namee == "" || mail == "" || num == "" || mess == "")
{
  alert ('Please fill all fields !')
}
else
{
  var userName = localStorage.setItem('uname',namee);
  localStorage.setItem('umail',mail);
  localStorage.setItem('unum',num);
  localStorage.setItem('umess',mess);

  alert ('Thankyou for your response!');
}
}

function contact()
{
 
 
}

