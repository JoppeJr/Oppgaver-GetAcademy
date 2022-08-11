function updateViewPoll() {
    document.getElementById('app').innerHTML = /*html*/ `
    <button onclick="goToOptions()">Til alternativer siden</button> <br>
    <h3>Hvordan var din Kundeopplevelse?</h3><hr>
    <ul>
        ${createPollHtml()}
    </ul>

    `;
}

function createPollHtml() {
    let html = '';
    for (let i = 0; i < model.option.length; i++) {
        let option = model.option[i];
        html += `<li>
        <button 
        onclick="vote(${i})" 
        style="width: 100px;
        background-color: ${option.color}"
        >
        ${option.text}
        </button>
        ${option.voteCount ? ` - ${option.voteCount}` : ''}

        </li>`
    } /*på vote funksjonen så sender man med indexen så man har en verdi. */
    return html;
}