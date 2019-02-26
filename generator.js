$(document).ready(function () {
    $("#generate").click(function (){
        if(index < inspire_content.length){
            getMotivationalQuote();
        } else {
            alert('You reached the end.');
        }
    });
});

var inspire_content = [
    {
        "theme": "Self-love",
        "picture": "1.jpg",
        "quote": "The purpose of life is to know yourself and love.",
        "credit": ""}
    ,
    {
        "theme": "Listen to Bob Ross.",
        "picture": "4.jpg",
        "quote": "Growth cannot be measured only by success.",
        "credit": ""
    },
    {
        "theme": "Be a porcupine",
        "picture": "5.jpg",
        "quote": "Remember that bad times.. are just times that are bad.",
        "credit": "artist @chibird"
    },
    {
        "theme": "Acceptance",
        "picture": "2.jpg",
        "quote": "",
        "credit": ""
    },
    {
        "theme": "Happy thoughts",
        "picture": "6.jpg",
        "quote": "",
        "credit": "artist @chibird"
    }
];

function shuffleSequence(){
    let i = inspire_content.length;
    while(i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = inspire_content[i];
        inspire_content[i] = inspire_content[j];
        inspire_content[j] = temp;
    }
    return inspire_content;
}

inspire_content = shuffleSequence(inspire_content);

var index = 0;

function getMotivationalQuote(){
    $('#title').html(inspire_content[index].theme);
    $('#content').html(inspire_content[index].quote);
    $('#image').attr('src', "resources/"+ inspire_content[index].picture);
    index++;
}


