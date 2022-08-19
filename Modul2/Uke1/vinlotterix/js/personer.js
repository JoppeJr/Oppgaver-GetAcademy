function updateViewPersoner() {
    document.getElementById('app').innerHTML = /*html*/ `
    <h3>Vinlottrix!</h3> <button>Personer</button><button>Trekkning</button>
    <h4><input type="checkbox">Personer</h4><br>

    <input type="text"> <button>Legg til</button><br>
    <button>Trekk!</button><input><button>⬆</button><button>⬇</button>
    `;

    updateView();

}