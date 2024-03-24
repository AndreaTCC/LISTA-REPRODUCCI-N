const longinButton = document.getElementById('boton-iniciarSesion')
const userInput = document.getElementById('username')
const passwordInput = document.getElementById('contraseña')



const users = [
    { username: 'Andrea', password: '1234' },
    { username: 'David', password: '5678' }
]

longinButton.addEventListener('click', (e) => {
    e.preventDefault()
    const userValue = userInput.value;
    const passwordValue = passwordInput.value;

    const user = users.find((user) => user.username == userValue && user.password == passwordValue)
    if(user) {
        alert("BIENVENIDO AL REPRODUCTOR");
        localStorage.setItem('isLoggeIn',true);
        window.location.href = './home.html';

    } else alert("USUARIO O CONTRASEÑA INCORRECTA, INTÉNTELO NUEVAMENTE");
})
