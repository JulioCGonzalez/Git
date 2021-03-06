
//////////////////////
//////////////////////
//////////////////////
//Envia los correos
$('#enviar_correo').click(function() {
  var addres = document.getElementById("correo_destino").value;
  var topic = document.getElementById("asunto").value;
  var contents = CKEDITOR.instances.editor.getData();
  var enviados = getEnviados();
  var id = enviados.length + 1;
  var correo = {
    "id": id,
    "addres": addres,
    "topic": topic,
    "contents": contents,
    "fecha": new Date()
  };
  if (addres != "" && topic != "" && contents != "") {
    enviados.push(correo);
    setEnviados(enviados);

  }
});

$('#guardar_correo').click(function() {
  var addres = document.getElementById("correo_destino").value;
  var topic = document.getElementById("asunto").value;
  var contents = CKEDITOR.instances.editor.getData();
  var salida = getSalida();
  var id = salida.length + 1;
  var correo = {
    "id": id,
    "addres": addres,
    "topic": topic,
    "contents": contents,
    "fecha": new Date()
  };
  if (addres != "" && topic != "" && contents != "") {
    salida.push(correo);
    setSalida(salida);

  }
});

function getEnviados() {
  var enviados = JSON.parse(localStorage.getItem('enviados'));
  return enviados ? enviados : [];
}

function setEnviados(data) {
  localStorage.setItem('enviados', JSON.stringify(
    data));
}

function getSalida() {
  var salida = JSON.parse(localStorage.getItem('salida'));
  return salida ? salida : [];
}

function setSalida(data) {
  localStorage.setItem('salida', JSON.stringify(
    data));
}



function imprimirEnviados() {
  var enviados = getEnviados();
  var tableBody = $('#tEnviados').find('tbody');
  var body = '';
  enviados.forEach(function(enviado, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + enviado.addres + '</td>' +
      '<td id="b1">' + enviado.topic + '</td>' +
      '<td id="b1">' + enviado.contents + '</td>' +
      '<td id="b1">' + enviado.fecha + '</td>' +
      '<td id="b1"><button id="eliminar_correo_enviados" data-id="' +
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
      '<td id="b1">' + salida.addres + '</td>' +
      '<td id="b1">' + salida.topic + '</td>' +
      '<td id="b1">' + salida.contents + '</td>' +
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
  var data = [];
  salida.forEach(function(element, index) {
    if (element.id != id) {
      data.push(element);
    }
  });
  setSalida(data);
  imprimirSalida();
});

$(document).delegate('#eliminar_correo_enviados', "click", function() {
  var id = $(this).data('id');
  var enviados = getEnviados();
  var data = [];
  enviados.forEach(function(element, index) {
    if (element.id != id) {
      data.push(element);
    }
  });
  setEnviados(data);
  imprimirEnviados();
});



//////////////////////
//////////////////////
//////////////////////
//////////////////////
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
//////////////////////
//////////////////////
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
//////////////////////////
//////////////////////////
//////////////////////////
function setEditarData() {

  var salida = getSalida();
  var id = window.location.search.split('=')[1];
  var addres = document.getElementById('destino');
  var topic = document.getElementById('asunto');
  var editor = CKEDITOR.instances.editor;
  var data;

  salida.forEach(function(element, index) {
    if (element.id == id) {
      return data = element;
    }
  });
  addres.value = data.addres;
  topic.value = data.topic;
  editor.setData(data.contents);

}



