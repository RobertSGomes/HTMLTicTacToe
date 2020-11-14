var turn = "x";
var count = 0;

function Fill(par) {
    var n = document.getElementById(par).innerHTML;

    if(n == "" || n == null) {
        $('#' + par).html(turn);

        count ++;

        if (count >= 5 && count < 9) {
            Checar(par);
        } else if (count == 9) {
            Checar(par);
            alert('VELHA');
            Limpar();
        }

        if (turn === "o") {
            turn = "x";
        } else {
            turn = "o";
        }
        
        document.getElementById('turn').innerHTML=turn;
    } else {
        alert('Este campo já esta preenchido.');
    }   
}

function Checar(par) {
    if(par == 1) {
        if (
            $('#2').text() == turn && $('#3').text() == turn ||
            $('#4').text() == turn && $('#7').text() == turn ||
            $('#5').text() == turn && $('#9').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 2) {
        if (
            $('#1').text() == turn && $('#3').text() == turn ||
            $('#5').text() == turn && $('#8').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 3) {
        if (
            $('#1').text() == turn && $('#2').text() == turn ||
            $('#6').text() == turn && $('#9').text() == turn ||
            $('#5').text() == turn && $('#7').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 4) {
        if (
            $('#1').text() == turn && $('#7').text() == turn ||
            $('#5').text() == turn && $('#6').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 5) {
        if (
            $('#1').text() == turn && $('#9').text() == turn ||
            $('#3').text() == turn && $('#7').text() == turn ||
            $('#2').text() == turn && $('#8').text() == turn ||
            $('#4').text() == turn && $('#6').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 6) {
        if (
            $('#4').text() == turn && $('#5').text() == turn ||
            $('#3').text() == turn && $('#9').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 7) {
        if (
            $('#8').text() == turn && $('#9').text() == turn ||
            $('#4').text() == turn && $('#1').text() == turn ||
            $('#5').text() == turn && $('#3').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 8) {
        if (
            $('#7').text() == turn && $('#9').text() == turn ||
            $('#5').text() == turn && $('#2').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    } else if (par == 9) {
        if (
            $('#7').text() == turn && $('#8').text() == turn ||
            $('#6').text() == turn && $('#3').text() == turn ||
            $('#5').text() == turn && $('#1').text() == turn
         )  {
            alert(turn + ' ganhou');
            Limpar();
        }
    }
}

function Limpar() {
    $('#1').text(null);
    $('#2').text(null);
    $('#3').text(null);
    $('#4').text(null);
    $('#5').text(null);
    $('#6').text(null);
    $('#7').text(null);
    $('#8').text(null);
    $('#9').text(null);
    turn = 'x';
    $('#turn').text(turn);
    count = 0;
    callback();
}