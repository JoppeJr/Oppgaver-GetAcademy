const model = {
    //app
    app: {
        page: 'search', // edit, legg til, slette
    },


    //inputs
    inputs: {
        search: {
            text: '',

        },
        createNew: {
            name: '',
            emailAdress: '',
        },
        delete: {
            areYouSure: false,
            personId: null,
        },
        edit: {
            personId: null,
            name: '',
            email: '',
        }
    },




    //data
    people: [
        { id: 1, name: 'Erik', email: 'erik@getAcademy.no' },
        { id: 2, name: 'Alf', email: 'alf@getAcademy.no' },
        { id: 3, name: 'Ola', email: 'ola@getAcademy.no' },
    ]







}