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
                answer: '',
                addAnswer: '',
                /* Add awnser input*/
                startTime: '',
                endTime: '',
                generateLink: '',
                /* Start Poll*/
            },
        },


    },
    //3: felles data
    pollQuestion: [{
            id: 1,
            question: 'Hvilken dag passer best?',
            answer: 'Mandag',
            answer: 'Tirsdag',
        },
        { id: 2, question: '', answer: '', },
        { id: 3, question: '', answer: '', },
    ]
}