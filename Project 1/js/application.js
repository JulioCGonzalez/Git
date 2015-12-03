var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function saveToLocalStorage(name,lastname,username, password,email) {
	var user = {
		"name": name,
        "lastname": lastname,
        "username": username,
        "password": password,
        "email": email
        
	};
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	loadUsers();
}


function loadUsers() {

	// read users from localstorage
	// loop users
	var user_html = "";
	for (var i = 0; i < users.length; i++) {
		// add users to the table
		var u = users[i];
		user_html = user_html + "<tr><td>"+u.name+"<tr><td>"+u.lastname+"<tr><td>"+u.username+"</td><td>"+
		u.password+"</td></tr>"+u.email;
	}

	$('#users_table').html(user_html);

}
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var u = users;    
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == u.username && password == u.){
alert ("Login successfully");
window.location = "start_logueado"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


