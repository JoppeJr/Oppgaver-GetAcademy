function createNewUser() {
    user = {}
    user.brukernavn = model.inputs.create.brukernavn;
    user.passord = model.inputs.create.passord;
    user.produkter = [];
    user.totalsum = 0;
    user.totalbudsjett = 0;
    user.restbudsjett = 0;
    model.brukere.push(user)
    model.currentPage = 'budsjett'
    model.currentUser = model.inputs.create.brukernavn;
    findUserIndex();
    console.log(model.userIndex)
    updateView();

}

function backToLogin() {
    model.currentPage = 'login';
    console.log('trykket tilbake')
    updateView();
}