function goToDeletePerson(personId) {
    model.app.page = 'delete';
    model.inputs.delete.personId = personId;
    updateView();
}

function goToEditPerson(personId) {
    model.app.page = 'edit';
    model.inputs.edit.personId = personId;
    const person = findPersonById(personId)
    model.inputs.edit.name = person.name;
    model.inputs.edit.name = person.email;
    updateView();
}