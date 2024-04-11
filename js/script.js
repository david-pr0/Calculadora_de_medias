//seleciona o body da tabela
let campo = document.querySelector('#campo');
//seleciona o primeiro input
let atividade = document.querySelector('#atividade');
//seleciona o segundo input
let nota = document.querySelector('#nota');
//seleciona o formulário
let form = document.querySelector('.form');
//seleciona o campo de exibição de média
let fim = document.querySelector('#media');
//selecionando o campo de aprovação
let aprovado = document.querySelector('.aprovado');
let rodape = document.querySelector('#rodape');

//variaveis para calculo de media
let cont = 0;
let soma = 0;

//adicionando linhas a tabela com o evento submit do formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //criando linhas e elementos
    let novoCampo = document.createElement('tr');
    let linhaAtividade = document.createElement('td');
    let linhaNota = document.createElement('td');
    //atribuindo os valores dos formularios aos elementos
    let conteudoAtividade = document.createTextNode(atividade.value);
    let conteudoNota = document.createTextNode(nota.value);
    //atribuindo os valores dos elementos as linhas
    linhaAtividade.appendChild(conteudoAtividade);
    linhaNota.appendChild(conteudoNota);
    //atribuindo as linhas ao campo principal
    novoCampo.appendChild(linhaAtividade);
    novoCampo.appendChild(linhaNota);
    //decisão para adicionar o valor aprovado ou reprovado ao fim da linha
    if (nota.value >= 7) {
        let resultado = document.createElement('td');
        let valor = document.createTextNode('Aprovado');
        resultado.appendChild(valor);
        novoCampo.appendChild(resultado);
        
    } else {
        let resultado = document.createElement('td');
        let valor = document.createTextNode('Reprovado');
        resultado.appendChild(valor);
        novoCampo.appendChild(resultado);
    }
    //adicionando o campo ao dom
    campo.appendChild(novoCampo);
    campo.classList.add('table');
    cont ++;
    soma += parseInt(nota.value);
    final();
})

//calculando media
function final () {
    let media = soma / cont;
    let valor = document.createTextNode(media.toFixed(1));
    classe(media);
    fim.innerHTML = '';
    fim.appendChild(valor);
}

function classe(media) {
    if (media >= 7) {
        aprovado.classList.remove('reprovado');
        aprovado.classList.add('aprovado');
        let resultado = document.createTextNode('Aprovado');
        aprovado.innerHTML = '';
        aprovado.appendChild(resultado);
        rodape.style.display = 'table-footer-group';
    } else {
        aprovado.classList.remove('aprovado');
        aprovado.classList.add('reprovado');
        let resultado = document.createTextNode('Reprovado');
        aprovado.innerHTML = '';
        aprovado.appendChild(resultado);
        rodape.style.display = 'table-footer-group';
    }
}
