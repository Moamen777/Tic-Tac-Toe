var turn = 'x';
var title = document.querySelector('.title');
var squares = [];


function game (id){
    var element = document.getElementById(id);


    if (turn === 'x' && element.innerHTML=='') {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if (turn === 'o' && element.innerHTML =='') {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner()
}


function winner(){
    for (let i = 1; i < 10; i++) {
        
      squares[i] = document.getElementById('box' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        gameOver(1,2,3)
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        gameOver(4,5,6)
    }

    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '') {
        gameOver(7,8,9)
    }

    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '') {
        gameOver(1,4,7)
    }

    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '') {
        gameOver(2,5,8)
    }

    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        gameOver(3,6,9)
    }

    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != '') {
        gameOver(1,5,9)
    }

    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        gameOver(3,5,7)
    }

}


function gameOver(num1,num2,num3){
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('box'+num1).style.background = '#000';
    document.getElementById('box'+num2).style.background = '#000';
    document.getElementById('box'+num3).style.background = '#000';

    setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000);

}