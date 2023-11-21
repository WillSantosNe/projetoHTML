document.addEventListener('DOMContentLoaded', function() {
    // Simulando um Banco de Dados
    const dadosRelatorio = [
        { nome: "João Silva", endereco: "Rua das Flores, 123", telefone: "(11) 99999-9999", cidade: "São Paulo", pais: "Brasil" },
        { nome: "Maria Oliveira", endereco: "Avenida Central, 456", telefone: "(21) 88888-8888", cidade: "Rio de Janeiro", pais: "Brasil" },
        { nome: "Carlos Pereira", endereco: "Travessa Laranjeiras, 789", telefone: "(31) 77777-7777", cidade: "Belo Horizonte", pais: "Brasil" },
        { nome: "Ana Santos", endereco: "Praça da Liberdade, 101", telefone: "(41) 66666-6666", cidade: "Curitiba", pais: "Brasil" },
        { nome: "Pedro Rocha", endereco: "Rua dos Pinheiros, 202", telefone: "(51) 55555-5555", cidade: "Porto Alegre", pais: "Brasil" },
        { nome: "Laura Neves", endereco: "Rua do Sol, 303", telefone: "(61) 44444-4444", cidade: "Brasília", pais: "Brasil" },
        { nome: "Rafael Costa", endereco: "Avenida Atlântica, 550", telefone: "(81) 33333-3333", cidade: "Recife", pais: "Brasil" },
        { nome: "Juliana Martins", endereco: "Praça das Árvores, 404", telefone: "(71) 22222-2222", cidade: "Salvador", pais: "Brasil" },
        { nome: "Marcos Vinícius", endereco: "Alameda das Rosas, 505", telefone: "(65) 11111-1111", cidade: "Cuiabá", pais: "Brasil" },
        { nome: "Fernanda Lima", endereco: "Rua das Pedras, 606", telefone: "(85) 00000-0000", cidade: "Fortaleza", pais: "Brasil" },
        { nome: "Lucas Moraes", endereco: "Rua da Praia, 707", telefone: "(13) 99999-0000", cidade: "Santos", pais: "Brasil" },
        { nome: "Patrícia Ribeiro", endereco: "Avenida Paulista, 1200", telefone: "(11) 88888-0000", cidade: "São Paulo", pais: "Brasil" },
    ];

    const tabelaCorpo = document.getElementById("tabela-corpo");

    // Para cada objeto no array dadosRelatorio, é criada uma nova linha na tabela
    // Insere células correspondentes aos dados (nome, endereço, telefone, cidade e país).
    dadosRelatorio.forEach(function(dado) {
        let linha = tabelaCorpo.insertRow();
        linha.insertCell(0).textContent = dado.nome;
        linha.insertCell(1).textContent = dado.endereco;
        linha.insertCell(2).textContent = dado.telefone;
        linha.insertCell(3).textContent = dado.cidade;
        linha.insertCell(4).textContent = dado.pais;
    });


    const linhasTabela = document.querySelectorAll('.container-tabela table tbody tr');

    linhasTabela.forEach(function(linha) {
        linha.addEventListener('click', function() {
            // Remove a classe de todas as linhas para garantir que apenas uma linha esteja destacada por vez
            linhasTabela.forEach(function(linha) {
                linha.classList.remove('highlighted');
            });
            
            // Adiciona a classe 'highlighted' à linha clicada
            linha.classList.add('highlighted');
        });
    });
});
