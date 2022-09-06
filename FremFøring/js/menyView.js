function updateViewMenu() {
    html = ''

    html += `Logget in som: ${model.currentUser}<button onclick="logut()">Log ut</button><br>
    <h2>Meny Siden</h2><br> 
    <button onclick="updateViewBudsjett()">Budsjett</button><button onclick="updateViewKalender()">Kalender</button><br>
    
    
    `;
    document.getElementById('app').innerHTML = html
}