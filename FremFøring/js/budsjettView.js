function updateViewBudsjett() {
    html = '';
    html = /*html*/ `
            Logget in som: ${model.currentUser}<button onclick="logut()">Log ut</button><br>
            <button onclick="updateViewMenu()">Meny</button><br>
            Legg til Total budsjett<br> 
            <input 
            type="number" 
            oninput="model.inputs.budsjett.totalbudsjett = this.value" 
            placeholder="Skriv inn totalt inntekt">
            </br><button onclick="addbudsjett()">Registrer budsjett</button></br> 
            Legg til Produkt<br>
            <input 
            type="text" 
            oninput="model.inputs.budsjett.name = this.value"
            ></br>
            Legg til Pris<br> 
            <input 
            type="number" 
            oninput="model.inputs.budsjett.price = this.value"
            ></br> 
            <button 
            onclick="addObjectToList()"
            >Registrer</button>
            <button onclick="tøm()">Tøm</button><hr>
            
           ${createBudsjett()}
            `;
    console.log(model.brukere[model.userIndex].produkter)
    document.getElementById('app').innerHTML = html;
}

function createBudsjett() {
    //if (model.currentUser = model.brukere[model.userIndex].brukernavn) {
    let User = model.brukere[model.userIndex];
    if (model.brukere[model.userIndex].restbudsjett <= -1) {
        belowBudsjett = 'red';
    } else {
        belowBudsjett = 'black'
    }
    console.log(User.produkter.length);
    for (let i = 0; i < User.produkter.length; i++) {
        html += `<div><button onclick='deleteThis(${i})'>x</button> ${User.produkter[i].name}  <tt>
                 kr ${User.produkter[i].price} </tt> â <tt>${User.produkter[i].quantity}</tt></div>`
        console.log(User.produkter.name)

    }

    html += `
    
    
    </br>Sum: <tt>${model.brukere[model.userIndex].totalsum} </tt>kr,- <hr>
    Rest budsjett: <tt style="color:${belowBudsjett};">${model.brukere[model.userIndex].restbudsjett} </tt>kr,-</br>
    Total budsjett: <tt>${model.brukere[model.userIndex].totalbudsjett} </tt>kr,-`;
    return html;
    //}
}

// function createProducts() {
//     let User = model.brukere[model.userIndex];
//     //if (User.produkter == []) {

//     //} else {
//     for (let i = 0; i < User.produkter.lenght; i++) {
//         html += `<div><button onclick='deleteThis(${i})'>x</button> ${User.produkter[i].name}  <tt>
//              kr ${User.produkter.price} </tt></div>`
//         console.log(User.produkter.name)

//     }
//     //}${createProducts()}
// }