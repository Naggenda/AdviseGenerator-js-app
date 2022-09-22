let advice = document.getElementById('adviceDisplay');
let adviceNum = document.getElementById('adviceNum');
// let advicePage = document.querySelector('#advicePage');


let quote = [
    '"its easy to sit up and take notice, whats difficult is getting up and taking action"',
    '"people dont care about you, while it may sound depressing, its actually liberating. it means you dont have to worry so much what people think of you."',
    '"while you keep track of all your mistakes and awkward moments, nobody else does, people are too busy worrying about them selves."',
    '"always comsider the use of enviromentally friendly solutions"',
    '"if the money you have cannot solve your problem, eat that money "',
    "never let a broken heart break your dreams",
    "always learn to move on",
    "learn to love those that love you",
    "never give up on your dream",
    "always hate to be lazy ",
    "love your neighbor as you lve yourself",
    "do not give in to rebellion",
    "fight to become the best version of you",
    "do not always follow nyash aimlessly ",
    "heat your money"
];

document.getElementById('genAdvice').addEventListener('click', function(){
    let r =Math.floor(Math.random()*quote.length);
    let num = r+1;
    adviceNum.innerText = "Advice #" + num;
    advice.innerText = quote[r];
});

document.getElementById('advice').onload = function(){
    let r =Math.floor(Math.random()*quote.length);
    let num = r+1;
    adviceNum.innerText = "Advice #" + num;
    advice.innerText = quote[r];
}
