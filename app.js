let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeAmigo = document.getElementById('amigo').value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista atual
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo à lista
    amigos.forEach(function (amigo) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    // Verifica se há pelo menos dois amigos na lista
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return; // Interrompe a execução da função
    }

    // Embaralha a lista de amigos
    let amigosEmbaralhados = embaralharArray([...amigos]);

    // Cria o resultado do sorteio
    let resultado = [];
    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSorteado = amigosEmbaralhados[i];
        resultado.push(`${amigoAtual} tirou ${amigoSorteado}`);
    }

    // Exibe o resultado na tela
    exibirResultado(resultado);
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function exibirResultado(resultado) {
    let listaResultado = document.getElementById('resultado');

    // Limpa o resultado anterior
    listaResultado.innerHTML = "";

    // Adiciona cada resultado à lista
    resultado.forEach(function (item) {
        let itemLista = document.createElement('li');
        itemLista.textContent = item;
        listaResultado.appendChild(itemLista);
    });
}