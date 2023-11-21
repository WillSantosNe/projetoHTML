function verificarLogin() {
    /*
    Esta função verifica se um usuário está logado com base na presença de um objeto usuarioLogado no armazenamento local (localStorage). 
    Se o usuário não estiver logado, ela exibe um modal de aviso e aplica um desfoque (efeito de "blur") no conteúdo principal da página para destacar o modal. 
    Se o usuário estiver logado, o modal é oculto e o desfoque é removido.
    */
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
