$(document).ready(function () {
    $("#generate").click(function (){
        $("img").css({
            display: "inline-block"
        })
        if(index < inspire_content.length){
            getMotivationalQuote();
        } else {
            alert('You reached the end.');
        }
    });
});

var inspire_content = new Array();
fetch('inspire_content.json')
.then(data => data.json())
.then(data => inspire_content = data);

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
    $('#credits').html(inspire_content[index].credit);
    index++;
}


