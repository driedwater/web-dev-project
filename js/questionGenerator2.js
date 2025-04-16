var variable1;
var variable2;
var correctAns1;
var correctAns2;
var symbol;

function randInt() {
    return Math.floor(Math.random() * 101);
}

function randStr() {
    variable1 = '';
    variable2 = '';
    var characters = 'abcdefghijklmnpqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 1; i++ ) {
    variable1 += characters.charAt(Math.floor(Math.random() * 
                                    charactersLength));
    variable2 += characters.charAt(Math.floor(Math.random() * 
                                    charactersLength));
    }
}

function randSymbol() {
    symbol = '';
    var characters = '*/';
    var charactersLength = characters.length;
    for ( var i = 0; i < 1; i++ ) {
    symbol += characters.charAt(Math.floor(Math.random() * 
                                    charactersLength));
    }
}

function questionGenerator2() {
    var int1 = randInt();
    var int2 = randInt();

    randStr();
    randSymbol();
    if (symbol == '*') {
        if (int1 == 0 || int2 == 0) {
            correctAns1 = '0';
        } 
        else if (variable1 == variable2) {
            correctAns1 = int1 * int2 + variable1 + '^2';
        } 
        else {
        correctAns1 = int1 * int2 + variable1 + variable2;
        correctAns2 = int1 * int2 + variable2 + variable1;

        }
    } 
    else {
        if (int1 == 0) {
            correctAns1 = '0';
        }
        else if (variable1 == variable2) {
            correctAns1 = Math.round(((int1 / int2) + Number.EPSILON) * 100) / 100;
        } 
        else {
            correctAns1 = (Math.round(((int1 / int2) + Number.EPSILON) * 100) / 100) + variable1 + '/' + variable2;
        }
    }
    var displayQn = document.getElementById('displayQn2');
    displayQn.innerHTML = int1 + variable1 + ' ' +symbol + ' ' + int2 + variable2;
}

function answerChecker2() {
    var inputvalue = document.getElementById('question2').value;
    if (correctAns1 == inputvalue) {
        alert('Correct!');
    } else if (correctAns2 == inputvalue) {
        alert('Correct!');
    } else {
        alert('Oops, wrong answer');
    }
}