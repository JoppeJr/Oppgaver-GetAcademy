function goToPoll() {
    model.app.currentPage = 'vote';
    updateView();
}

function addOption() {
    model.option.push({
        text: model.inputs.optionsPage.newOption,
        color: model.inputs.optionsPage.newColor,
    })
    model.inputs.optionsPage.newOption = '';
    model.inputs.optionsPage.newColor = '';
    updateView();
}