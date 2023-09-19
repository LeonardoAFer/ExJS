function validaCampo() {

    var email = document.getElementById('email');

    if (email.value == '') {

        document.getElementById("erro").innerHtml = "favor preencher o campo email"
        document.getElementById('erro').className = 'style-message';
        email.focus();
        return false;

    }

    if (email.value.indexOf('@') == -1) {
        document.getElementById("erro").innerHTML = "Formato de email incorreto ";
        document.getElementById('erro').className = 'style-message';
        email.focus();
        return false;
    }

    if (email.value.indexOf('.') == -1) {
        document.getElementById("erro").innerHTML = "Formato de email incorreto ";
        document.getElementById('erro').className = 'style-message';
        email.focus();
        return false;
    }

    





var senha = document.getElementById('senha');
	
if(senha.value == '') {
        document.getElementById("erro").innerHTML= "Favor preencher o campo senha";
        document.getElementById('erro').className = 'style-message';
        email.focus();
        return false;
}


var log = document.getElementById('log');

if(email.value === 'leonardo@gmail.com' && senha.value != ''){

    document.getElementById("correto").innerHTML= "Cadastro confirmado";
    document.getElementById('correto').className = 'style-confirmado';
    return false;
}else{
    document.getElementById("correto").innerHTML= "Cadastro com o email errado";
    document.getElementById('correto').className = 'style-message';
    return false;

}




return true;
}



function limpa() {
    document.getElementById('erro').innerHTML = "";
}