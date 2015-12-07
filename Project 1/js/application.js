$('#send_mail').click(function() {
  var user_mail = document.getElementById("correo_destino").value;
  var cases = document.getElementById("asunto").value;
  var message = CKEDITOR.instances.editor.getData();
  var sends = getEnviados();
  var id = sends.length + 1;
  var mail = {
    "id": id,
    "user_mail": destino,
    "cases": asunto,
    "message": contenido,
    "date": new Date()
  };
  if (user_mail != "" && cases != "" && message != "") {
    sends.push(mail);
    setEnviados(sends);

  }
});

$('#guardar_correo').click(function() {
  var destino = document.getElementById("correo_destino").value;
  var asunto = document.getElementById("asunto").value;
  var contenido = CKEDITOR.instances.editor.getData();
  var salida = getSalida();
  var id = salida.length + 1;
  var correo = {
    "id": id,
    "destino": destino,
    "asunto": asunto,
    "contenido": contenido,
    "fecha": new Date()
  };
  if (destino != "" && asunto != "" && contenido != "") {
    salida.push(correo);
    setSalida(salida);

  }
});

function getEnviados() {
  var enviados = JSON.parse(localStorage.getItem('enviados'));
  return enviados ? enviados : [];
}

function setEnviados(datos) {
  localStorage.setItem('enviados', JSON.stringify(
    datos));
}

function getSalida() {
  var salida = JSON.parse(localStorage.getItem('salida'));
  return salida ? salida : [];
}

function setSalida(datos) {
  localStorage.setItem('salida', JSON.stringify(
    datos));
}

$('#save_client').click(function() {
  console.log('Sign_up');
  var mail = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (mail == '' || pass == '') {

    alert('Fill the field');
    return;
  }

  localStorage.setItem("email",mail);
  localStorage.setItem("password", pass);
  
    
  window.location = "log_in.html"

});
$('#iniciar').click(function() {

  var mail = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var logUser = localStorage.getItem("email");
  var logPass = localStorage.getItem("password");
  if (mail == logUser && password == logPass) {
    return location = "menu.html"
  }
  window.alert("Wrong password or username");
});

function imprimirEnviados() {
  var enviados = getEnviados();
  var tableBody = $('#tEnviados').find('tbody');
  var body = '';
  enviados.forEach(function(enviado, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + enviado.destino + '</td>' +
      '<td id="b1">' + enviado.asunto + '</td>' +
      '<td id="b1">' + enviado.contenido + '</td>' +
      '<td id="b1">' + enviado.fecha + '</td>' +
      '<td id="b1"> <button id="editar_correo_enviado" data-id="' +enviado.id+ 
        '" class="">Editar</button><button id="eliminar_correo_enviados" data-id="' +
      enviado.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);

}

function imprimirSalida() {
  var salida = getSalida();
  var tableBody = $('#tSalida').find('tbody');
  var body = '';
  salida.forEach(function(salida, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + salida.destino + '</td>' +
      '<td id="b1">' + salida.asunto + '</td>' +
      '<td id="b1">' + salida.contenido + '</td>' +
      '<td id="b1">' + salida.fecha + '</td>' +
      '<td id="b1"><button id="editar_correo_salida" data-id="' + salida.id +
      '" class="">Editar</button><button id="eliminar_correo_salida" data-id="' +
      salida.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);
}


$(document).delegate("#editar_correo_salida", "click", function() {
  var id = $(this).data('id');
  location = location = "editar_correo.html?id=" + id;
});

$(document).delegate('#eliminar_correo_salida', "click", function() {
  var id = $(this).data('id');
  var salida = getSalida();
  var datos = [];
  salida.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setSalida(datos);
  imprimirSalida();
});
$(document).delegate("#editar_correo_enviados", "click", function() {
  var id = $(this).data('id');
  location = location = "editar_correo.html?id=" + id;
});
$(document).delegate('#eliminar_correo_enviados', "click", function() {
  var id = $(this).data('id');
  var enviados = getEnviados();
  var datos = [];
  enviados.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setEnviados(datos);
  imprimirEnviados();
});

function setEditarData() {

  var salida = getSalida();
  var id = window.location.search.split('=')[1];
  var destino = document.getElementById('destino');
  var asunto = document.getElementById('asunto');
  var editor = CKEDITOR.instances.editor;
  var datos;

  salida.forEach(function(element, index) {
    if (element.id == id) {
      return datos = element;
    }
  });
  destino.value = datos.destino;
  asunto.value = datos.asunto;
  editor.setData(datos.contenido);

}
//var users = JSON.parse(localStorage.getItem('users'));

//if (!users) {
//	users = [];
//}


//function saveToLocalStorage(name, lastname, username, password, email) {
//	var user = {
//		"name": name,
//        "lastname": lastname,
//        "username": username,
//        "password": password,
//        "email": email
        
//	};
//	users.push(user);

//	localStorage.setItem('users', JSON.stringify(users));
//	loadUsers();
//}


//function loadUsers() {

	// read users from localstorage
	// loop users
//	var user_html = "";
//	for (var i = 0; i < users.length; i++) {
		// add users to the table
//		var u = users[i];
//		user_html = user_html + "<tr><td>"+u.name+"<tr><td>"+u.lastname+"<tr><td>"+u.username+"</td><td>"+
//		u.password+"</td></tr>"+u.email;
//	}

//	$('#users_table').html(user_html);

//}
//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
//function validate(){
//var u = users;    
//var username = document.getElementById("username").value;
//var password = document.getElementById("password").value;
//if ( username == u.username && password == u.password){
//alert ("Login successfully");
//window.location = "start_logueado"; // Redirecting to other page.
//return false;
//}
//else{
//attempt --;// Decrementing by one.
//alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
//if( attempt == 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;
//return false;
//}
//}
//}
