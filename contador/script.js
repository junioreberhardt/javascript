function contar() {
    let inicio = document.getElementById('form_inicio')
    let fim = document.getElementById('form_fim')
    let passo = document.getElementById('form_passo')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar...'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p

        if (passo.value.length === 0) {
            p = 1
        } else {
            p = Number(passo.value)

            if (p <= 0 || isNaN(p)) {
                window.alert('O valor do passo não pode ser 0 nem negativo!')
                return
            }
        }

        res.innerHTML = 'Contando...<br>'

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
