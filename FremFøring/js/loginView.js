function updateViewLogin() {
    document.getElementById('app').innerHTML = /*html*/ ` 

    <h3>Budsjett log inn</h3><br>
    Brukernavn:<br>
    <input type="text" oninput="model.inputs.loginn.brukernavn = this.value"><br>
    Passord:<br>
    <input type="password" oninput="model.inputs.loginn.passord = this.value"><BR>
    <button onclick="login()">Log Inn</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onclick="goToCreateNew()">Lag ny</button>
   

    `;



}

// function createButtonsHtml() {
//     return /*html*/ `
//     // ${createButtonsHtml()}
// `;