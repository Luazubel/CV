let enviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let empresa = document.getElementById("empresa");
let email = document.getElementById("email");
let comentario = document.getElementById("comentario");
let formulario = document.getElementById("formulario");

//eventos
enviar.addEventListener("click", enviarInfo);
nombre.addEventListener("blur", () => {
  validarNombre(nombre);
});
empresa.addEventListener("blur", () => {
  validarEmpresa(empresa);
});
email.addEventListener("blur", () => {
  validarEmail(email);
});
comentario.addEventListener("blur", () => {
  validarComentario(comentario);
});

//validaciones
function validarNombre(input) {
  if (input.value.length >= 3 && input.value.length <= 50) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}

function validarEmpresa(input) {
  if (input.value.length >= 3 && input.value.length <= 50) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}

function validarEmail(input) {
    let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(exp.test(input.value)){
        input.className = 'form-control is-valid';
        return true
    }else{
        input.className = 'form-control is-invalid';
        return false
    }
}

function validarComentario(input) {
  if (input.value.length >= 30 && input.value.length <= 200) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}

function enviarInfo() {
  if(validarNombre(nombre) && validarEmpresa(empresa) && validarEmail(email) && validarComentario(comentario)){
    Swal.fire({
        icon: "success",
        title: "Se envió con éxito tu mensaje",
        showConfirmButton: false,
        timer: 3000
      });   
      limpiarFormulario()
  } else {
    Swal.fire({
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 3000
    }); 
  }
}

function limpiarFormulario() {
  formulario.reset()
  nombre.className = "form-control"
  empresa.className = "form-control"
  email.className = "form-control"
  comentario.className = "form-control"
}
