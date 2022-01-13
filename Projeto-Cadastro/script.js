let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('res')
let valores = []

function inNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}


function add(){
    if (inNumero(num.value) && !inLista(num.value, valores) ) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        resultado.innerHTML=''
    }else{
        alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()
}

function final() {
    if (valores.length == 0) {
        alert('Adicione valores para finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos = 0; pos < valores.length; pos++){
           
            soma += valores[pos]
           
            if (valores[pos] > maior) {
                maior = valores[pos]
            }else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        resultado.innerHTML=''
        resultado.innerHTML+=`<p>Ao todo foram cadastrados ${tot} valores</p>`
        resultado.innerHTML+=`<p>O maior valor cadastrado é ${maior}</p>`
        resultado.innerHTML+=`<p>O menos valor cadastrado é ${menor}</p>`
        resultado.innerHTML+=`<p>A soma entre os valores é ${soma}</p>`
        resultado.innerHTML+=`<p>A média entre os valores é de ${media}</p>`
    }
    
}