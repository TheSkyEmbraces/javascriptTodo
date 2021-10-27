const quotes = [{
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "- Mason Cooley -",
    }, {
        quote: "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다",
        author: "- Mahatma Gandhi -",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "- Mason Cooley -",
    },
    {
        quote: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
        author: "- Bill Gates -",
    },
    {
        quote: "그 여정이 바로 보상이다.",
        author: "- Steve Jobs -",
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라.",
        author: "- Helen Keller -",
    },
    {
        quote: "나머지 인생을 설탕물이나 팔면서 보내고 싶습니까, 아니면 세상을 바꿔놓을 기회를 갖고 싶습니까?",
        author: "- Steve Jobs -",
    },
    {
        quote: "일 분 전만큼 먼 시간은 없다.",
        author: "- Jim Bishop -",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;