function decisao1( ) {
    alert ( 'Escolha um número: 1 ou 2');
    var escolha1 = prompt ('Qual é a opção correta?');
    while (true) {
        if (escolha1 == 1){
            window.location = ("../html/gamehover-loser.html");
            break;
        }
        else if (escolha1 == 2) {
            window.location = ("../html/playerDracula2.html");
            break;
        }
        else {
            alert ('Opção inválida!');
            escolha1 = prompt ('Escolha entre os números 1 ou 2 para seguir na próxima fase:');
        }
    }
}

function decisao2( ) {
    alert ( 'Escolha um número: 1 ou 2');
    var escolha1 = prompt ('Qual é a opção correta?');
    while (true) {
        if (escolha1 == 1){
            window.location = ("../html/playerDracula3.html");
            break;
        }
        else if (escolha1 == 2) {
            window.location = ("../html/gamehover-loser.html");
            break;
        }
        else {
            alert ('Opção inválida!');
            escolha1 = prompt ('Escolha entre os números 1 ou 2 para seguir na próxima fase:');
        }
    }
}

function decisao3( ) {
    alert ( 'Escolha um número: 1 ou 2');
    var escolha1 = prompt ('Qual é a opção correta?');
    while (true) {
        if (escolha1 == 1){
            window.location = ("../html/gamehover-loser.html");
            break;
        }
        else if (escolha1 == 2) {
            window.location = ("../html/gamehover-winner.html");
            break;
        }
        else {
            alert ('Opção inválida!');
            escolha1 = prompt ('Escolha entre os números 1 ou 2 para seguir na próxima fase:');
        }
    }
}