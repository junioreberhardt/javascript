let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let btn_fin = document.getElementById('finalizar')
let valores = []

function eNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, lista) {
    return lista.includes(n)
}

function add() {
    let n = Number(num.value)

    if (eNumero(n) && !naLista(n, valores)) {
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = n
        lista.appendChild(item)
        res.innerHTML = ''
        btn_fin.disabled = false
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let max = Math.max(...valores)
        let min = Math.min(...valores)
        let soma = valores.reduce((acum, val) => {
            return acum + val;
        }, 0);
        let media = soma / valores.length

        res.innerHTML = `<p>Temos ao todo ${total} números</p>`
        res.innerHTML += `<p>O maior valor informado ${max}</p>`
        res.innerHTML += `<p>O menor valor informado ${min}</p>`
        res.innerHTML += `<p>A soma dos números informados é ${soma}</p>`
        res.innerHTML += `<p>A média dos números informados é ${media}</p>`
    }
}
