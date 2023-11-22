const menu = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');
const seleccionar = document.querySelectorAll('.select')

menu.onclick = () => {
    navBar.classList.toggle('nav-bar-show');
};

seleccionar.forEach(select => {
select.addEventListener("click", () => {
    navBar.classList.toggle('nav-bar-show');
});
});

const btnEnviar = document.getElementById('btn-enviar');

const validacion = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje')

  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  };

  if (apellido.value === "") {
    alert("Por favor, escribe tu apellido.");
    apellido.focus();
    return false;
  };

  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico.");
    email.focus();
    return false;
  };

  if (!emailValido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  };

  if (mensaje.value === "") {
    alert("Por favor, escribe tu mensaje.");
    mensaje.focus();
    return false;
  }

  alert("¡Gracias por tu consulta!");
  return true; // los datos son válidos y se pueden enviar
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  btnEnviar.addEventListener('click', validacion);

function borrar() {
    document.getElementById("escribir").innerHTML=" " ;
   }

