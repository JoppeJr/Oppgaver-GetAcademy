function updateViewOptions() {
    document.getElementById('app').innerHTML = /*html*/ `
        <button onclick="goToPoll()">Til Svar siden</button> <br/>
        <h3>Legg til svar alternativ</h3> <hr/>
        <ul>
            ${createOptionsHtml()}
        </ul>
        Nytt alternativ:<br/>
        <input type="text" 
        oninput="model.inputs.optionsPage.newOption=this.value"
        value="${model.inputs.optionsPage.newOption}"
        >
        <select name="color" onchange="model.inputs.optionsPage.newColor=this.value">
            <option selected value="">Velg farge</option>
            <option value="green">Green</option>
            <option value="lightgreen">Light Green</option>
            <option value="yellow">yellow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
        </select>
    
        <button onclick="addOption()">Legg til</button>
        `;
}

function createOptionsHtml() {
    let html = '';
    for (let i = 0; i < model.option.length; i++) {
        let option = model.option[i];
        html += `<li
        style="width: 100px;
        background-color: ${option.color}"
        >
            ${option.text}
            </li>`
    } /*på vote funksjonen så sender man med indexen så man har en verdi. */
    return html;
}