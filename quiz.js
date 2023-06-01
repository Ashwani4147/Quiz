const data=[
    {
        id:1,
    question:"Who is the first Prime Minister of India?",
     answers: [
        {answer:"Nehru", iscorrect: true},
        {answer:"Gandhi" ,iscorrect:false},
        {answer: "Patel" , iscorrect:false},
        {answer:"Modi" , iscorrect:false}
     ],
    },
    {
        id:2,
        question:"Who is the first President of India?",
         answers: [
            {answer:"Patel", iscorrect: false},
            {answer:"Gandhi" ,iscorrect:false},
            {answer:"Rajendra" , iscorrect:true},
            {answer:"Modi" , iscorrect:false}
         ],
    },
    {
        id:3,
        question:"Who is the current Prime Minister of India?",
         answers: [
            {answer:"Nehru", iscorrect: false},
            {answer:"Gandhi" ,iscorrect:false},
            {answer: "Patel" , iscorrect:false},
            {answer:"Modi" , iscorrect:true}
         ],
    }
];

const gamescreen=document.querySelector(".game")
const resultscreen=document.querySelector(".result")
const question=document.querySelector(".question")
const answerscontainer=document.querySelector(".answers")
const submit=document.querySelector(".submit")
const play=document.querySelector(".play")

let quesindex=0;
let correctcount=0;
let wrongcount=0;
let totalscore=0;
let selectedanswer;

const playagain=()=>{
    quesindex=0;
   correctcount=0;
   wrongcount=0;
   totalscore=0;

   showquestion(quesindex);

};

play.addEventListener("click",()=>{
    resultscreen.style.display="none"
    gamescreen.style.display="block"
    playagain();
});

const showresult=()=>{
    resultscreen.style.display="block"
    gamescreen.style.display="none"

    resultscreen.querySelector(".correct").textContent=
    `Correct Answers: ${correctcount}`

    
    resultscreen.querySelector(".wrong").textContent=
    `Wrong Answers: ${wrongcount}`

    
    resultscreen.querySelector(".score").textContent=
    `Score: ${(correctcount-wrongcount)*10}`
}

const showquestion= (quesnumber) =>{ 
    if(quesindex=== data.length) return showresult();
    selectedanswer=null;
    question.textContent=data[quesnumber].question;
    answerscontainer.innerHTML=data[quesnumber].answers.map((item,index)=>
    `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.iscorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
    ).join("");

    selectanswer();
};
 const selectanswer=()=>{
    answerscontainer.querySelectorAll("input").forEach((el)=>
    {
        el.addEventListener("click",(e)  =>{
            selectedanswer=e.target.value;
        })
    });
 };

 const submitanswer=()=>{
    submit.addEventListener("click",()=>{
        if(selectedanswer !==null){
        selectedanswer==="true" ? correctcount++ :wrongcount++;
        quesindex++;
        showquestion(quesindex);
        } else
            alert("select an answer");
        
    });
 };
showquestion(quesindex);
submitanswer();