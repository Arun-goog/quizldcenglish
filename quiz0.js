// select all elements
const login = document.getElementById("login");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qnsnumb = document.getElementById("qnsnumb");
const choiceA = document.getElementById("opt5");
const choiceB = document.getElementById("opt4");
const choiceC = document.getElementById("opt3");
const choiceD = document.getElementById("opt2");


let score = 0;
let qnsIndex = 0;
let eventChecker = 0;

// create our questions
let questions = [
    {
        question : "Ten thousands rupees ______ a large sum" ,
        qnsnum : "QNS 1",
        choiceA : "are",
        choiceB : "is",
        choiceC : "was",
        choiceD : "has",
        correct : 4
    },{
        question : "None of them attended the function,_______ (Use proper question TAG)",
        qnsnum : "QNS 2",
        choiceA : "do they",
        choiceB : "did they",
        choiceC : "didn't they",
        choiceD : "don't they",
        correct : 4
    },{
        question : "A ______ of cattle is passing through the forest",
        qnsnum : "QNS 3",
        choiceA : "fleet",
        choiceB : "group",
        choiceC : "herd",
        choiceD : "team",
        correct : 3
    },{
        question : "The workers built a bridge (change into passive voice)",
        qnsnum : "QNS 4",
        choiceA : "A bridge was built by the workers",
        choiceB : "A bridge is building by the workers",
        choiceC : "A bridge has been built by the workers",
        choiceD : "A bridge is built by the workers",
        correct : 5
    },{
        question : "She speaks french very good (correct the sentence)",
        qnsnum : "QNS 5",
        choiceA : "She spoke french very well",
        choiceB : "She will speak french very well",
        choiceC : "She speak french very well",
        choiceD : "She speaks french very well",
        correct : 2
    },
    {
        question : "The high price surprised me ( HIGH- belongs to which parts of speech)",
        qnsnum : "QNS 6",
        choiceA : "Adjective",
        choiceB : "Noun",
        choiceC : "Pronoun ",
        choiceD : "Adverb",
        correct : 5
    },
    {
        question : "Correct word among the following series",
        qnsnum : "QNS 7",
        choiceA : "Diarroea",
        choiceB : "Excelence",
        choiceC : "Seperate",
        choiceD : "Queue",
        correct : 2
    },{
        question : "I couldn't tolerate her behaviour (Find the phrasal verb for TOLERATE)",
        qnsnum : "QNS 8",
        choiceA : "Put out",
        choiceB : "Put off",
        choiceC : "Put up with",
        choiceD : "Put down",
        correct : 3
    },{
        question : "My brother works in a large office, _____ I work on my own at home",
        qnsnum : "QNS 9",
        choiceA : "Whereas",
        choiceB : "Moreover",
        choiceC : "Firstly",
        choiceD : "Actually ",
        correct : 5
    },{
        question : "She sits _____ an arm-chair (Use appropriate PREPOSITION)",
        qnsnum : "QNS 10",
        choiceA : "in",
        choiceB : "under",
        choiceC : "with",
        choiceD : "on",
        correct : 5

    },{
        question : "Hit the nail on the head (Find the meaning of the idiom)",
        qnsnum : "QNS 11",
        choiceA : "Tried to do a job",
        choiceB : "Tried to criticize",
        choiceC : "Said excatly the right thing",
        choiceD : "Attempted to commit the suicide",
        correct : 3
        
    },{
        question : "I ____ a lot of friends,While i was working in bombay",
        qnsnum : "QNS 12",
        choiceA : "was meeting",
        choiceB : "met",
        choiceC : "meets",
        choiceD : "meet",
        correct : 4
        
    },{
        question : "Had i know this, _______ .",
        qnsnum : "QNS 13",
        choiceA : "I would keep him at a distance",
        choiceB : "I would have keep him at a distance",
        choiceC : "I will have kept him at a distance",
        choiceD : "I would have kept him at a distance",
        correct : 2
        
    },{
        question : "The old man who lives in my neighbourhood is _____ university professor",
        qnsnum : "QNS 14",
        choiceA : "a",
        choiceB : "an",
        choiceC : "the",
        choiceD : "on",
        correct : 5
        
    },{
        question : "The prefix 'anti' is used to denote which of tyhe following word",
        qnsnum : "QNS 15",
        choiceA : "Against",
        choiceB : "Round",
        choiceC : "Before",
        choiceD : "Like",
        correct : 5
        
    },{
        question : "There are plans to rebuild the town hall, but it ______ not happen for another five years ",
        qnsnum : "QNS 16",
        choiceA : "should",
        choiceB : "do",
        choiceC : "has",
        choiceD : "may",
        correct : 2
        
    },{
        question : "Ram and Shyam are friends. The former is short, but the _______ is very stout.",
        qnsnum : "QNS 17",
        choiceA : "later",
        choiceB : "latter",
        choiceC : "latest",
        choiceD : "last",
        correct : 4
        
    },{
        question : "Either Rajesh or his friends ______ come.",
        qnsnum : "QNS 18",
        choiceA : "have",
        choiceB : "was",
        choiceC : "is",
        choiceD : "do",
        correct : 5
        
    },{
        question : "The meaning of the term 'Nota bene'",
        qnsnum : "QNS 19",
        choiceA : "Exceptionsl",
        choiceB : "No need to be noted",
        choiceC : "Noted carefully and important",
        choiceD : "For good cause",
        correct : 3
        
    },{
        question : "The women was attacked by a ______ of wolves",
        qnsnum : "QNS 20",
        choiceA : "herd",
        choiceB : "gang",
        choiceC : "pack",
        choiceD : "flock",
        correct : 3
        
    }

    
    
];



const lastQuestion = questions.length - 1;

function reStart(){
    qnsIndex = 0;
    score = 0;
    eventChecker = 0;
    scoreContainer.style.display = "none"
    startQuiz();
    optionRelease();

}




// start quiz
function startQuiz(){
    login.style.display = "none";
    vold.style.display  = "none";
    renderQuestion();
    quiz.style.display = "block";
    choices.style.display ="block";
}

function renderQuestion(){
    let q = questions[qnsIndex];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qnsnumb.innerHTML= q.qnsnum;

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


// checkAnwer
let prvsChoice;
function checkAnswer(answer){

    eventChecker++;

    optionLock();
    prvsChoice = answer;
    var ide = answer.id.split("");  

    if(ide[ide.length-1]==questions[qnsIndex].correct){
        score++;
        answer.className = "changecolorGreen";
        
    }else{
        answer.className = "changecolorRed";

    }

    
   
}


function nextQns(){

    
    optionRelease();
    if(eventChecker > 0){
        prvsChoice.className = "choice"
    }
    
   
    

    qnsIndex++;

    if(qnsIndex <= lastQuestion){
        renderQuestion();
    }else{
        optionLock();
        scoreRender();
}                                                                                                                                                                                                                                                                                                                                                  

}



// score render
function scoreRender(){
    scoreContainer.style.display = "grid";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    const totalScore = score ;
    
    
    document.getElementById("scoreCard").innerHTML = " Your score : "+ totalScore ;
}


function optionLock(){

    choiceA.style.pointerEvents = "none";
    choiceB.style.pointerEvents = "none";
    choiceC.style.pointerEvents = "none";
    choiceD.style.pointerEvents = "none";
}

function optionRelease(){

    choiceA.style.pointerEvents = "auto";
    choiceB.style.pointerEvents = "auto";
    choiceC.style.pointerEvents = "auto";
    choiceD.style.pointerEvents = "auto";

}

