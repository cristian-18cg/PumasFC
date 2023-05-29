const usuarios={
  "cristian":"1010118456",
  "pepepe":"pepe123",
  "prueba123":"123456789"
}

function validarCredenciales(usuario, contraseña) {
  // Buscar si el usuario existe en el objeto users
  if (usuarios[usuario]) {
    // Si el usuario existe, validar la contraseña
    if (usuarios[usuario] === contraseña) {
      return true; // Credenciales válidas
    }
  }
  return false; // Credenciales inválidas
} 



function validateForm() {
  var nombre = document.getElementById("usuario").value;
  var contra = document.getElementById("contraseña").value;
  
  if (validarCredenciales(nombre, contra)) {
    console.log("Credenciales válidas");
    alert("Credenciales validas");
    window.location.href = "pagina.html";
    return false
  } else {
    alert("Credenciales invalidas");
    console.log("Credenciales inválidas");
  }
}

function volver(){
  window.location.href= "index.html";
  
}