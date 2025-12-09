function gerar_tabuada() {
    let num = document.getElementById('form_num')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)

    if (num.value.length == 0 || isNaN(n) || n <= 0) {
        window.alert('Insira um número maior que 0!')
    } else {
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
