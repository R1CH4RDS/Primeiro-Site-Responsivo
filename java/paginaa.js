let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Ola ${userLogado.nome}`



function sair(){
    localStorage.removeItem('userLogado')
    localStorage.removeItem('token')
    window.location.href = '/index.html'
}

