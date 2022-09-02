function goToCreateNew() {
    model.currentPage = 'create';
    console.log('trykket lag ny')
        // findplayerIndex();
    updateView();
}

function login() {
    for (let i = 0; i < model.brukere.length; i++) {
        if (model.brukere[i].brukernavn == model.inputs.loginn.brukernavn &&
            model.brukere[i].passord == model.inputs.loginn.passord)

            model.currentPage = 'menu';
        model.currentUser = model.inputs.loginn.brukernavn;
        console.log('loggin')

    }
    findUserIndex();

    console.log(model.userIndex)
    updateView();
}

function findUserIndex() {

    let thisUser = model.brukere.find(user => user.brukernavn == model.currentUser);
    if (thisUser) {

        model.userIndex = model.brukere.indexOf(thisUser)
    }

}