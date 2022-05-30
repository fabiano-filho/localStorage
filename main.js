// Armazena um item pegando chave e o valor do input
function adicionar() {
    localStorage.setItem(txtChave.value, txtValor.value)
    alert('Item adicionado.')
    txtChave.value = txtValor.value = ''
}

// ler o valor de uma chave se não nula no localStorage
function ler() {
    var obj = localStorage.getItem(txtChave.value)
    if (obj != null) alert(obj)
    else alert('O item procurado não existe.')
}

// remove uma item do localStorage
function remover() {
    localStorage.removeItem(txtChave.value)
    alert('Item removido.')
}

// limpa todos os itens do localStorage
function limpar() {
    localStorage.clear()
    alert('')
}

// consulta quantos itens estão armazenados no localStorage
console.log(localStorage.length)
