function createNewUser() {
    user = {}
    user.brukernavn = model.inputs.create.brukernavn;
    user.passord = model.inputs.create.passord;
    user.produkter = [];
    user.totalsum = 0;
    user.totalbudsjett = 0;
    user.restbudsjett = 0;
    model.brukere.push(user)
    model.app.currentPage = 'budsjett'
    model.app.currentUser = model.inputs.create.brukernavn;
    updateView();

}

function backToLogin() {
    model.app.currentPage = 'login';
    console.log('trykket tilbake')
    updateView();
}