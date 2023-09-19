
function calculo() {

    var escolha = document.getElementById('escolha').value;
    var resultado = document.getElementById("resultado");


    switch (escolha) {

        case "1":
            var numero = prompt("por favor digite um numero para o calculo da raiz quadrada")
            resultado.textContent = "A raiz quadrada de " + numero + " é " + Math.sqrt(numero);
            break

        case "2":
            var numero = prompt("Informe um numero")
            var numero2 = prompt("Informe outro numero")
            if (numero > numero2) {
                resultado.textContent = "O numero maior é : " + numero;
            } else {
                resultado.textContent = "O numero maior é : " + numero2;
            }
            break
        case "3":
            var numero = prompt("informe um numero")
            var expoente = prompt("Informe o exponte que o numero vai ser elevado")
            resultado.textContent = "Resultado : " + Math.pow(numero, expoente);
            break

        case "4":
            var numero = parseFloat(prompt("Informe um numero"))
            var numero2 = parseFloat(prompt("Informe outro numero"))
            resultado.textContent = "Resultado da soma é : " + (numero + numero2);
            break
        case "5":
            var frase =  prompt("Informe uma frase em letras minuscolas")
            resultado.textContent = "A frase em letras maiuscolas fica : " + frase.toUpperCase();
        default:
            resultado.textContent = "Informe um numero de 1 a 5";
    }



}


