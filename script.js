const quizData = [

    {
        question: "1) HTML stands for.",
        options: ["1) Hyper Text Markup languge","2) HyperText Transfer Protocol", "3) HyperText Transfer Protocol","4) hyper text machine language"],
        answers: "Hyper Text Markup languge"
    }, 
    {
        question: "2) what is the largest plannet in our solar system?",
        options: ["1) jupiter","2) saturn","3) mars","4) earth"],
        answers: "jupiter"
    },
    {
        question: "3) The correct sequence of HTML tags for starting a webpage is -",
        options: ["1) Head, Title, HTML, body", "2) HTML, Body, Title, Head", "3) HTML, Head, Title, Body","4) HTML, Head, Title, Body"],
        answers: "HTML, Head, Title, Body"
    }, 
    {
        question: "4) Which of the following element is responsible for making the text bold in HTML?",
        options: ["1) <pre>","2) <a>","3) <b>","4) <br>"],
        answers: "<b>"
    }, 
    {
        question: "5) How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["1) <ul>","2) <ol>","3) <li>","4) <i>"],
        answers: "<ul>"
    }, 
    {
        question: "6) <input> is -",
        options: ["1) a format tag.","2) an empty tag.","3) All of the above","4) None of the above"],
        answers: " an empty tag"
    }, 
    {
        question: "7) Which of the following tag is used to define options in a drop-down selection list?",
        options: ["1) <select>", "2) <list>", "3) <dropdown>", "4) <option>"],
        answers: "<option>"
    }, 
    {
        question: " 8) The <hr> tag in HTML is used for -",
        options: ["1) new line","2) vertical ruler", "3) new paragraph","4) horizontal ruler"],
        answers: " horizontal ruler"
    }, 
    {
        question: " 9) Which of the following HTML attribute is used to define inline styles?",
        options: ["1) style","2) type","3) class","4) None of the above"],
        answers: "style"
    }, 
    {
        question: " 10) An HTML program is saved by using the ____ extension.",
        options: ["1) .ht","2) .html","3) .hml","4) None of the above"],
        answers: ".html"
    }, 
   

 //add more question..
];

 const questionElement = document.getElementById("question");
 const optionsElement = document.getElementById("options");
 const submitElement = document.getElementById("submit");

 let currentQuestions = 0;
 let score = 0;
 
 function showQuestions() {
    const question = quizData[currentQuestions];
    questionElement.innerText = question.question;
     
    optionsElement.innerHTML = "";
    question.options.forEach(options => {
        const button = document.createElement("button");
        button.innerText = options;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswers);
    });
 }
 function selectAnswers(e){
    const selectedButton = e.target;
    const answers = quizData[currentQuestions].answers;
    
    if(selectedButton.innerHTML === answers){
        score++;
    }

    currentQuestions++;

    if (currentQuestions < quizData.length){
        showQuestions();
    }else{
        showResult();
    }   
    }
      function showResult() {
        quiz.innerHTML = `
        <h1> Quiz Completed!</h1>
        <p> your score: ${score}/${quizData.length} </p>
        `;
    }

    showQuestions();
    
 
 
