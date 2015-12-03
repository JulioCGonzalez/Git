var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function saveToLocalStorage(username, password) {
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


