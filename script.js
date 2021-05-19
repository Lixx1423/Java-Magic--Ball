function ball() {
    let randomNumber = Math.floor(Math.random() * 11);
    var input = document.getElementById('userQuestion').value;
    document.getElementById('questionPrint').innerHTML = ('Your question was: ' + input + '?');
    console.log(randomNumber);
    switch(randomNumber){
    case 0:
    console.log('It is certain');
    document.getElementById('answerPrint').innerHTML = ('It is certain');
    break;
    case 1:
    console.log('It is decidedly so');
    document.getElementById('answerPrint').innerHTML = ('It is decidedly so');
    break;
    case 2:
    console.log('Reply hazy try again');
    document.getElementById('answerPrint').innerHTML = ('Reply hazy try again');
    break;
    case 3:
    console.log('Cannot predict now');
    document.getElementById('answerPrint').innerHTML = ('Cannot predict now');
    break;
    case 4:
    console.log('Do not count on it');
    document.getElementById('answerPrint').innerHTML = ('Do not count on it');
    break;
    case 5:
    console.log('My sources say no');
    document.getElementById('answerPrint').innerHTML = ('My sources say no');
    break;
    case 6:
    console.log('Outlook not so good');
    document.getElementById('answerPrint').innerHTML = ('Outlook not so good');
    break;
    case 7:
    console.log('Signs point to yes');
    document.getElementById('answerPrint').innerHTML = ('Signs point to yes');
    break;
    case 8:
    console.log('Absolutely Not');
    document.getElementById('answerPrint').innerHTML = ('Absolutely Not');
    break;
    case 9:
    console.log('Yes with confidence');
    document.getElementById('answerPrint').innerHTML = ('Yes with confidence');
    break;
    case 10:
    console.log('Maybe');
    document.getElementById('answerPrint').innerHTML = ('Maybe');
    break;
    }
    }
