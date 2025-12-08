function verificar() {

    var hoje = new Date()
    var ano_atual = hoje.getFullYear()
    var form_ano = document.getElementById('txtano')

    var res = document.getElementById('resultado')

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano_atual || Number(form_ano.value) == 0) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var form_sexo = document.getElementsByName('sexo')
        var idade = ano_atual - Number(form_ano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (form_sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'img/adulto-m.png')
            } else {
                imagem.setAttribute('src', 'img/idoso-m.png')
            }
        } else if (form_sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'img/adulto-f.png')
            } else {
                imagem.setAttribute('src', 'img/idoso-f.png')
            }
        }

        res.innerHTML = `<p>Verificamos ${genero} com ${idade} anos</p>`
        res.appendChild(imagem)
    }

}
