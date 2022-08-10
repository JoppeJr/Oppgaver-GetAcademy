function checkBMI(input) {
    if (input < 21) {
        bmioutput = 'undervektig'
    } else if (input >= 21 && input < 27) {
        bmioutput = 'normal'
    } else {
        bmioutput = 'overvektig'
    }
    view();
    // return output;

}

function checkAge(input) {
    if (input < 18) {
        ageoutput = 'Barn'
    } else if (input >= 18 && input < 62) {
        ageoutput = 'Voksen'
    } else {
        ageoutput = 'SteinGammal!'
    }
    view();
    // return output;
}

function deletePerson(index) {
    person.splice(index, 1)
    view();
}

function addPerson() {
    person.push(this.value)
    view();
}

function changePerson(index) {
    person[index] = this.value;
    view();
}