function updateViewKalender() {
    html = '';

    html += `
    Logget in som: ${model.currentUser}
    <button onclick="logut()">Log ut</button><br>
    <button onclick="updateViewMenu()">Meny</button><br>
    <h3>Kalender</h3>


    `;

    document.getElementById('app').innerHTML = html;
}

function createCalender() {
    html = ''
    html += `
    <div>Mandag</div>
    <div>Tirsdag</div>
    <div>Onsdag</div>
    <div>Torsdag</div>
    <div>Fredag</div>
    <div>Lørdag</div>
    <div>Søndag</div>
    <div>blablablabla</div>

    `;
}