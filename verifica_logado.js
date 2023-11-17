function verificarLogin() {
    var usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    var modal = document.getElementById('modalAviso');
    var mainContent = document.querySelector('main');

    if (!usuarioLogado) {
        // Mostra o modal se o usuário não estiver logado
        modal.style.display = 'block';
        mainContent.classList.add('blur');
    } else {
        // Não mostra o modal se o usuário estiver logado
        modal.style.display = 'none';
        mainContent.classList.remove('blur');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    verificarLogin();

    // Botão de logout
    var logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'login.html';
        });
    }
});
