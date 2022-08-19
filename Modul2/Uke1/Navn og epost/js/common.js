function createMenuHtml() {
    return /*html*/ `
    <button onclick="model.app.page = 'search'; updateView()">Søk</button>
    <button onclick="model.app.page = 'create'; updateView()">Legg Til</button>
    `;
}

function findPersonById(id) {
    for (let person of model.people) {
        if (person.id === id) return person;
    }
    return null;
}

function findPersonIndexById(id) {
    for (let i = 0; i < model.people.length; i++) {
        let person = model.people[i];
        if (person.id === id) return i;
    }
    return null;
}