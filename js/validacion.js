let enviar = document.getElementById("enviar");

enviar.addEventListener("click", enviarInfo);

function enviarInfo() {
  Swal.fire({
    icon: "success",
    title: "La informacion de envio",
    showConfirmButton: false,
    timer: 1500,
  });
}

