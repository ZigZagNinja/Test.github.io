var score1 = 301;
var score2 = 301;


function substitute() {

    var value = document.getElementById('myTextBox').value;
    var value2 = document.getElementById('ding').value;
    var title = document.getElementById('score1');
    var title2 = document.getElementById('score2');



    score1 = score1 - value;
    title.innerHTML = score1;
    document.getElementById("myTextBox").value = "";


    score2 = score2 - value2;
    title2.innerHTML = score2;
    document.getElementById("ding").value = "";


    if(score1 === 0){
        title.innerHTML = "Winner";
    }

    if(score2 === 0){
        title2.innerHTML = "Winner";
    }
}