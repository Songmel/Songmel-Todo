const quote = document.querySelector(".quote");

const quoteList = [
    {
        text:"That which does not kill us makes us stronger.",
        author:"Friedrich Nietzsche"
    },
    {
        text:"Thoughts are the shadows of our feelings - always darker, emptier and simpler.",
        author:"Friedrich Nietzsche"
    },
    {
        text:"Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
        author:"Friedrich Nietzsche"
    }
]

const randomNum = Math.floor(Math.random()*quoteList.length);

quote.innerText = quoteList[randomNum].text;
