const model = {
    //app
    app: {
        currentPage: 'login', // login, create
        currentUser: '',
    },


    //inputs
    inputs: {
        loginn: {
            brukernavn: '',
            passord: '',
        },


        create: {
            brukernavn: '',
            passord: '',
            gjentapassord: '',

        },

        budsjett: {
            totalbudsjett: 0,
            name: '',
            price: 0,

        }
    },


    //data
    brukere: [{
            brukernavn: 'Erik Jacobsen',
            passord: 'passord123',
            produkter: [],
            totalsum: 0,
            totalbudsjett: 0,
            restbudsjett: 0,
        },
        {
            brukernavn: 'test',
            passord: '123',
            produkter: [],
            totalsum: 0,
            totalbudsjett: 0,
            restbudsjett: 0,
        }
    ],

}