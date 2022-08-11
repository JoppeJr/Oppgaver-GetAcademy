const model = {
    // tilstand selve applikasjonen er i
    app: {
        page: 'create', // poll, resultat
    },
    //2: inputfelter

    inputs: {
        createPage: {
            addQuestion: {
                questionType: 1,
                question: '',
                isAnswerEnabled: false, 
                answer: '',
                addAnswer: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: '',
                /* Add awnser input*/
                addToPole: '',
                startTime: '',
                endTime: '',
                generateLink: '',
                /* Start Poll*/
            },
        },
        pollPage: {
            questionAnswer: {
            answer: true,
            answer2: false,
        },

        },


    },
    //3: felles data
    pollQuestion: [
        {
            id: 1,
            question: 'Hvilken dag passer best?',
            answer: 'Mandag',
            answer2: 'Tirsdag',
        },
        { id: 2, 
            question: '', 
            answer: ['svar',], 
        },
        { id: 3, 
            question: '', 
            answer: '', 
        },
    ]
}