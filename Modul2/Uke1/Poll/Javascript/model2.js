const model = {
// different pages
app: {
    page: 'create', // survey, resultat
},


// inputs

inputAdmin: {
        questions: {
            question: '',
            answers : [],
            typeOfQuestion: '',
            timeAndDate: '',

    },
},

   

inputEmployee: {
    generalAnswer: [],
    individualAnswer: '',
},


// common data  // added FAKE INFO for drawing up
surveyQuestions: [
        survey = { 
            surveyId:1,
            timeAndDate:{
            timeStart: '3pm',
            timeEnd:'3pm',
            dateStart: '9/7/2022',
            dateEnd:'10/7/2022',
        },
        
       questions:[
        { 
        questionId: 1,
        question: 'What color you like?',
        answers : ['green','red','blue'],
        typeOfQuestion: 'checkbox',
    
        },
         {
            questionId: 2, 
            question: 'When would you like the meeting?',
            answer: ['Monday'],
            typeOfQuestion: 'Individual employee question', 
        },
        {
            questionId: 3, 
            question: 'What time would you like the meeting?',
            answer: ['10:30', '12:15'],
            typeOfQuestion: 'Employee question', 
        },
    ],
    },

   

  
],


//added FAKE INFO for drawing up
result: [ 
    {
    parentid:1,
    idAnswer:1, 
    counts:5,
    percentage:50 ,
 },
 {
    parentid:1,
    idAnswer:2,
    counts:5,
    percentage:50 ,
},
{
    parentid:1,
    idAnswer:3,
    counts:0,
    percentage:0 ,
},

{
    parentid: 2,
    answers: [],
    
},
{
    parentid: 3,
    answers: ['10:30' , '12:15'],
    count:5,

}


]
}


// for (let index = 0; index < array.length; index++) {
//     `<div>${surveyQuestions[0].survey.answers[0]}  model.pollAnswers[index]  ${add(model.question1Answers[index])}%`
//     // green  50%;
// }
  
// function pers(tall){
//  let lengthofarray = model.question1Answers.length;

//     let desimal = tall/lengthofarray;
//     let percent = desimal*100;
//     model.polAnswers == percent
// }

//    function add(tall1,tall2){
//     model.pollAnswers.percentage = tall1/tall2;
//       let sum = tall1 +tall2;
//       return  sum
//    }

//    function view(){
//     document.getElementById("app").innerhtml= `
    
//     <div>${model.pollAnswers.count[i]}</div>`;
//    }


// function view(){
//     let variabel = model.surveyQuestions[0].questions[0].noeher.noemer.noetil;
//     html += model.surveyQuestions[0].questions[];
//     for(i=0,i<pollAnswers.length; i++) {
//         if(model.surveyQuestions.questionsId[i] == model.pollAnswers[i].parentid){
//             html += <div>
//             <div>${variabel}</div>
//             <div>${model.pollAnswers[i].count}</div>
//             <div>${model.pollAnswers[i].percentage}</div>

//         </div>
//         }
        
       
//     }
// }
// categories:[{lydOgBildeid:1}, {hodetelefonerID:3, parentid:1}]
