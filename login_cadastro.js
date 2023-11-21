// cadastrar
function cadastrar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma_senha = document.getElementById("confirma_senha").value;

    var dados = JSON.parse(localStorage.getItem('dados')) || [];

    // Verificando se as senhas são iguais
    if(senha != confirma_senha){
        alert("As senhas não coincidem.");
        return;
    }

    // Verificando se já existe uma conta com o email fornecido
    if(dados.some(data => data.email === email)){
        alert("Já existe uma conta com esse email!");
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    dados.push(novoUsuario);
    localStorage.setItem('dados', JSON.stringify(dados));

    alert("Conta criada com sucesso!");
    window.location.href = 'index.html';
}


// Função de login
function login(){
    console.log('A função login foi chamada.');

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    console.log('Email:', email);
    console.log('Senha:', senha);

    var dados = JSON.parse(localStorage.getItem('dados')) || [];
    console.log('Dados de usuário carregados:', dados);

    const usuario = dados.find(us => us.email === email);

    if(usuario && usuario.senha === senha){
        alert("Login realizado com sucesso!");
        console.log('Redirecionando para relatorio.html');

        localStorage.setItem('usuarioLogado', JSON.stringify({ email: usuario.email, nome: usuario.nome }));

        window.location.href = 'relatorio.html';
    }else{
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
}




document.addEventListener('DOMContentLoaded', function() {
    
    const loginElement = document.getElementById('login');
    if (loginElement) {
        loginElement.addEventListener('click', function(event) {
            event.preventDefault();
            login();
        });
    }

    const cadastroElement = document.getElementById('cadastro');
    if (cadastroElement) {
        cadastroElement.addEventListener('click', function(event) {
            event.preventDefault();
            cadastrar();
        });
    }
});





