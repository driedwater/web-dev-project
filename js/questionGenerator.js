
var correctAns;

function randInt() {
    return Math.floor(Math.random() * 101)
}
function questionGenerator1() {
    var int1 = randInt();
    var int2 = randInt();

    var variable = '';
    var characters = 'abcdefghijklmnpqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 1; i++ ) {
      variable += characters.charAt(Math.floor(Math.random() * 
                                    charactersLength));
        }

    var plusOrMinus = ''
    var plusMinusMap = '+-'
    for ( var i = 0; i < 1; i++ ) {
        plusOrMinus += plusMinusMap.charAt(Math.floor(Math.random() * 
                                      plusMinusMap.length));
          }

    if (plusOrMinus == '+') {
        correctAns = int1 + int2 + variable;
    } else {
        correctAns = int1 - int2 + variable;
    }

    var displayQn = document.getElementById('displayQn');
    displayQn.innerHTML = int1 + variable + ' ' + plusOrMinus + ' ' + int2 + variable;
}

function answerChecker1() {
    var inputvalue = document.getElementById('question').value
    if (correctAns == inputvalue) {
        alert('Correct!')
    } else {
        alert('Oops, wrong answer')
    }
}