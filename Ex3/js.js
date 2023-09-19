function calcularMedia() {

    var nota1 =parseFloat(document.getElementById('campoNota1').value);
    var nota2 = parseFloat(document.getElementById('campoNota2').value);
    var nota3 = parseFloat(document.getElementById('campoNota3').value);
    var nota4 = parseFloat(document.getElementById('campoNota4').value);

    var nome = document.getElementById("campoNome").value.trim();

    if (nome == "") {
        document.getElementById("erro").innerHTML = "Preencha o campo nome.";
        document.getElementById('erro').className = 'msg2';
        return; 
    }else
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7 && media <= 10) {
        document.getElementById("situacao").innerHTML = "Aprovado : " + media;
        document.getElementById('situacao').className = 'msg';
    } else if (media > 10) {
        document.getElementById("situacao").innerHTML = "Resultado impossivel ";
        document.getElementById('situacao').className = 'msg2';
    } else {
        document.getElementById("situacao").innerHTML = "Reprovado : " + media;
        document.getElementById('situacao').className = 'msg2';
    }


}







function clearFields() {
    document.getElementById('erro').innerHTML = "";
    document.getElementById('situacao').innerHTML = "";
  


}