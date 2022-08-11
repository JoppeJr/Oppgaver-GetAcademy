function goToOptions() {
    model.app.currentPage = 'options';
    updateView();
}

function vote(index) {
    let option = model.option[index];
    if (!option.voteCount) {
        option.voteCount = 0;
    }
    option.voteCount++;
    updateView();
}