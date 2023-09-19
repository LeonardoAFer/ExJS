function insert(num) {

    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero += num

    if (num === 'C') {
        document.getElementById('resultado').innerHTML = "";
    }
}

function calcular() {

    var resultado = document.getElementById('resultado').innerHTML
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }



}
