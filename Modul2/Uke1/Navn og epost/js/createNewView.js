function updateViewCreate() {
    document.getElementById('app').innerHTML = /*html*/ `
        ${createMenuHtml()}
        <hr>
        ${createPersonEditHtml()}
        <h3>Legg Til</h3>
       
            
       <button onclick="addPerson()">Endre</button>
        
        `;
}

function createPersonEditHtml() {
    const personId = model.inputs.edit.personId;
    const person = findPersonById(personId);
    return /*html*/ `
        Navn: <br>
        <input 
            type="text" 
            value="${model.inputs.edit.name}"
            oninput="model.inputs.edit.name=this.value" 
        ><br>
        E-Post:<br>
        <input 
            type="text" 
            value="${model.inputs.edit.email}"
            oninput="model.inputs.edit.email=this.value" 
        ><br>
        `;
}