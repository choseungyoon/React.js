const quotes = [
    {
        quote : "A",
        author :"a"
    },
    {
        quote : "B",
        author :"b"
    },
    {
        quote : "C",
        author :"c"
    }
]

function randomNumber(){
    return Math.floor(Math.random() * quotes.length);
}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuete = quotes[randomNumber()];

quote.innerText = todayQuete.quote;
author.innerText = todayQuete.author;