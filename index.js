const nombreInput = document.getElementById('nombre');
nombreInput.addEventListener('input', function () {
  if (nombreInput.checkValidity()) {
    nombreInput.classList.add('valid');
    nombreInput.classList.remove('invalid');
  } else {
    nombreInput.classList.add('invalid');
    nombreInput.classList.remove('valid');
  }
});
const emailInput = document.getElementById('correo');
emailInput.addEventListener('input', function () {
  if (emailInput.checkValidity()) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
  }
});
const contraseña1Input = document.getElementById('contraseña1');
contraseña1Input.addEventListener('input', function () {
  if (contraseña1Input.checkValidity()) {
    contraseña1Input.classList.add('valid');
    contraseña1Input.classList.remove('invalid');
  } else {
    contraseña1Input.classList.add('invalid');
    contraseña1Input.classList.remove('valid');
  }
});
const contraseña2Input = document.getElementById('contraseña2');
contraseña2Input.addEventListener('input', function () {
  if (contraseña2Input.checkValidity()) {
    contraseña2Input.classList.add('valid');
    contraseña2Input.classList.remove('invalid');
  } else {
    contraseña2Input.classList.add('invalid');
    contraseña2Input.classList.remove('valid');
  }
});