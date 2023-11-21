// Quando uma linha é clicada, a função remove a classe highlighted de todas as linhas (garantindo que apenas uma linha esteja destacada por vez)
// Adiciona a classe highlighted à linha clicada. Isso cria um efeito visual que destaca a linha selecionada.

document.addEventListener('DOMContentLoaded', function() {
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
