function updateViewCreate() {
    document.getElementById('app').innerHTML = /*html*/ `
    <h3>Lag ny bruker</h3><br>
    Brukernavn: <br>
    <input type="text" oninput="model.inputs.create.brukernavn = this.value"><br>
    Passord: <br>
    <input type="password" oninput="model.inputs.create.passord = this.value"><br>
    Gjenta passord: <br>
    <input type="password" oninput="model.inputs.create.gjentapassord = this.value"><br>
    <button onclick="createNewUser()">Lag ny bruker</button>&nbsp;&nbsp;
    <button onclick="backToLogin()">Tilbake</button>
    `;

}