var sec = 0;
var min = 0;
var hr = 0;

var time;

function twoDigits(digits){
    if(digits<10){
        return ('0'+digits)
    }else{
        return digits
    }
}

function start(){
    counter()
    time =setInterval(counter, 1000);
}

function pause(){
    clearInterval(time);
}
function zerar(){
    clearInterval(time);
    sec = 0;
    min = 0;
    hr = 0;
    document.querySelector('.time').innerHTML = '00:00:00'
}

function counter(){
    sec++
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            min=0;
            hr++;
        }
    }
    document.querySelector('.time').innerHTML =twoDigits(hr)+ ':'+twoDigits(min)+ ':'+twoDigits(sec);
}
