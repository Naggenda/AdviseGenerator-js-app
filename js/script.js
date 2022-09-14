let advice = document.getElementById('adviceDisplay');
let adviceNum = document.getElementById('adviceNum');
let quote = [
    "its easyto sit up and take notice, whats difficult is getting up nd taking notice",
    "qeat your money",
    "weat your money",
    "reat your money",
    "seat your money",
    "teat your money",
    "ueat your money",
    "veat your money",
    "weat your money",
    "xeat your money",
    "yeat your money",
    "zeat your money",
    "ceat your money",
    "peat your money",
    "keat your money",
    "leat your money",
    "deat your money",
    "geat your money",
    "feat your money",
    "heat your money"
];

function genAdvice(){
    let r =Math.floor(Math.random()*quote.length);
    let num = r+1;
    adviceNum.innerText = "Advice #" + num;
    advice.innerText = quote[r];
}

function advicer(){
    let r =Math.floor(Math.random()*quote.length);
    let num = r+1;
    adviceNum.innerText = "Advice #" + num;
    advice.innerText = quote[r];
}