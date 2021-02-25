class letters
{
    constructor(letter, morse)
    {
        this.letter = letter;
        this.morse = morse;
    }
}
var alphabet = 
[
    new letters('a', ".-"),
    new letters('b', "-..."),
    new letters('c', "-.-."),
    new letters('d', "-.."),
    new letters('e', "."),
    new letters('f', "..-."),
    new letters('g', "--."),
    new letters('h', "...."),
    new letters('i', ".."),
    new letters('j', ".---"),
    new letters('k', "-.-"),
    new letters('l', ".-.."),
    new letters('m', "--"),
    new letters('n', "-."),
    new letters('o', "---"),
    new letters('p', ".--."),
    new letters('q', "--.-"),
    new letters('r', ".-."),
    new letters('s', "..."),
    new letters('t', "-"),
    new letters('u', "..-"),
    new letters('v', "...-"),
    new letters('w', ".--"),
    new letters('x', "-..-"),
    new letters('y', "-.--"),
    new letters('z', "--.."),
    new letters('å', ".--.-"),
    new letters('ä', ".-.-"),
    new letters('ö', "---."),
    new letters('0', "-----"),
    new letters('1', ".----"),
    new letters('2', "..---"),
    new letters('3', "...--"),
    new letters('4', "....-"),
    new letters('5', "....."),
    new letters('6', "-...."),
    new letters('7', "--..."),
    new letters('8', "---.."),
    new letters('9', "----."),
    new letters(' ', " ")
];
var button = document.getElementById("morseButton");
button.style.display = "none";

let currentTime = new Date();
let endTime = new Date(2021, 1, 24, 18, 0, 0);
let endTicks = endTime.valueOf();
let currentTicks;
let ticksLeft;
let secondsLeft;
let minutesLeft;
let hoursLeft;
let daysLeft;

let charmessage;

var countDown = document.getElementById("countDown");

calculate();

activate();

function activate()
{
var intervalId = window.setInterval(function(){ //Not Mine
    if(ticksLeft > 0)
    {
        calculate();
    }
    else
    {
        window.clearInterval(intervalId);
        activateMorse();
    }
  }, 500);
}

function calculate()
{
    currentTime = new Date();
    currentTicks = currentTime.valueOf();
    ticksLeft = endTicks-currentTicks;
    
    secondsLeft = Math.floor(ticksLeft / 1000); //seconds
            
    minutesLeft = Math.floor(secondsLeft / 60); //minutes
    secondsLeft -= minutesLeft*60;

    hoursLeft = Math.floor(minutesLeft / 60);   //hours
    minutesLeft -= hoursLeft*60;

    daysLeft = Math.floor(hoursLeft / 24);   //days
    hoursLeft -= daysLeft*24;
    display();

    function display() {
        let displayString = "";
        if(ticksLeft > 0)
        {
            //countDown.innerHTML = daysLeft + " Days " + hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " seconds" ;
            //countDown.innerHTML = daysLeft + ":" + hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
            if(daysLeft > 0 && daysLeft < 10)
            {
                displayString += ("0" + daysLeft + ":");
            }
            else if(daysLeft >= 10)
            {
                displayString += daysLeft + ":";
            }
            
            if(hoursLeft > 0 && hoursLeft < 10)
            {
                displayString += ("0" + hoursLeft + ":");
            }
            else if(hoursLeft >= 10)
            {
                displayString += hoursLeft + ":";
            }
            else if(hoursLeft == 0)
            {
                displayString += "00:"
            }
            
            if( minutesLeft > 0 && minutesLeft < 10)
            {
                displayString += ("0" + minutesLeft + ":");
            }
            else if(minutesLeft >= 10)
            {
                displayString += minutesLeft + ":";
            }
            else if(minutesLeft == 0)
            {
                displayString += "00:"
            }
            
            if(secondsLeft > 0 && secondsLeft < 10)
            {
                displayString += ("0" + secondsLeft);
            }
            else if(secondsLeft >= 10)
            {
                displayString += secondsLeft;
            }
            else if(secondsLeft == 0)
            {
                displayString += "00"
            }
            countDown.innerHTML = displayString;
        }
    }
}

function morse() //Called When Button pushed
{
    let message = "Hej Sebastian";
    let morseMessage = "";
    let dotTime = 400;
    let dashTime = 1200;
    let waitTime = 2000;
    let extraTime = 600;
    let totalTime = 0;
    message = message.toLowerCase();
    
    for (let i = 0; i < message.length; i++) {
        alphabet.forEach(letr => {
            if(message[i] == letr.letter)
            {
                morseMessage += (letr.morse + " ");
            }
        });
    }
    for (let j = 0; j < morseMessage.length; j++) {
        if(morseMessage[j] === '.')
        {
            setTimeout(() => {
                console.log(".");
                countDown.style.backgroundColor = "white";
                countDown.style.color = "white";
                setTimeout(() => {
                    countDown.style.backgroundColor = "black";
                countDown.style.color = "black";
                }, dotTime);
            }, totalTime);
            totalTime += dotTime + extraTime;
        }
        if(morseMessage[j] === '-')
        {
            setTimeout(() => {
                console.log("-");
                countDown.style.backgroundColor = "white";
                countDown.style.color = "white";
                setTimeout(() => {
                    countDown.style.backgroundColor = "black";
                countDown.style.color = "black";
                }, dashTime);
            }, totalTime);
            totalTime += dashTime + extraTime;
        }
        if(morseMessage[j] === ' ')
        {
            setTimeout(() => {
            console.log(" ");
            }, totalTime);
            totalTime += waitTime + extraTime;
        }
    }
    setTimeout(() => {
        button.style.display = "block";
        console.log("Morse Done");
    }, totalTime);
    button.style.display = "none";
}

function activateMorse() 
{
    countDown.style.backgroundColor = "black";
    countDown.style.color = "black";
    countDown.innerHTML = "14";
    button.style.display = "block";
}

//Add Button?