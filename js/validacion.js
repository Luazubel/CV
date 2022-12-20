let enviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let empresa = document.getElementById("empresa");
let email = document.getElementById("email");
let comentario = document.getElementById("comentario");

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
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarEmpresa(input) {
  if (input.value.length >= 3 && input.value.length <= 50) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function validarEmail(input) {
    let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(exp.test (input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}

function validarComentario(input) {
  if (input.value.length >= 30 && input.value.length <= 200) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

function enviarInfo() {
        Swal.fire({
            icon: "success",
            title: "La informacion de envio",
            showConfirmButton: false,
            timer: 3000
          });   
}
