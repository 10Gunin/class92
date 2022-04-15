player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
 player1_score=0;
 player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;

question_turn="player1";
answer_turn="player2";

function send(){
     get_word=document.getElementById("word").value;
 word=get_word.toLowerCase();
    char1=word.charAt(1);
     lengthby2=Math.floor(word.length/2);
     char2=word.charAt(lengthby2);
     length_minus1=word.length-1;
    char3=word.charAt(length_minus1);
     remove1=word.replace(char1,"_");
     remove2=remove1.replace(char2,"_");
     remove3=remove2.replace(char3,"_");

     question_word="<h4 id='word_display'> Q. "+remove3+"</h4>";
     inputbox="<br>answer: <input type='text' id='inputbox'>";
    checkbutton="<br> <br> <button class='btn btn-info' onclick='check()'>check </button>";
     row=question_word+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check(){
    storage=document.getElementById("inputbox").value;
    storagesmall=storage.toLowerCase();
    if(storagesmall==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;   
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn- "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn- "+player1_name;   
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1_name  
    }
    document.getElementById("output").innerHTML="";
}