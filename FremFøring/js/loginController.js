function goToCreateNew() {
    model.app.currentPage = 'create';
    console.log('trykket lag ny')
    updateView();
}

function login() {
    for (let i = 0; i < model.brukere.length; i++) {
        if (model.brukere[i].brukernavn == model.inputs.loginn.brukernavn &&
            model.brukere[i].passord == model.inputs.loginn.passord)

            model.app.currentPage = 'budsjett';
        model.app.currentUser = model.inputs.loginn.brukernavn;
        console.log('loggin')

    }
    updateView();
}