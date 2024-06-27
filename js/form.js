function sandwhatsapp(){
    var phonenumber = "+5581997457324";

    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var phone = document.querySelector('.phone').value;
    var state = document.querySelector('.state').value;
    var intention = document.querySelector('.intention').value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Nome :* " +name+"%0a"
    +"*E-mail :* " +email+"%0a"
    +"*Telefone :* " +phone+"%0a"
    +"*Meu estado :* " +state+"%0a"
    +"*Finalidade :* " +intention+"%0a%0a"

    +"Olá, gostei muito da Passou Encontrou. Acima está o motivo do meu contato e meus dados. Gostaria muito de conversar com vocês!"

    window.open(url).focus();
}

function duvwhatsapp(){
    var phonenumber = "+5581997457324";

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Ainda tem alguma dúvida? Não tem problema, detalhe sua dúvida bem aqui: "

    window.open(url).focus();
}

