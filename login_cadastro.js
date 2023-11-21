// Função para cadastrar um novo usuário
function cadastrar(){
    /*
    Esta função coleta os valores inseridos nos campos de entrada (nome, email, senha e confirma_senha) de um formulário de cadastro.
    Em seguida, verifica se as senhas digitadas coincidem e se já existe uma conta com o email fornecido. 
    Se as verificações forem bem-sucedidas, cria um novo objeto de usuário, o adiciona aos dados existentes e armazena os dados localmente.
    Por fim, exibe uma mensagem de sucesso e redireciona o usuário para 'index.html'.
    */
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

    // Cria um objeto de novo usuário com os valores dos campos
    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Adiciona o novo usuário ao array de dados
    dados.push(novoUsuario);

    // Armazena os dados atualizados localmente
    localStorage.setItem('dados', JSON.stringify(dados));

    // Exibe uma mensagem de sucesso e redireciona para 'index.html'
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





