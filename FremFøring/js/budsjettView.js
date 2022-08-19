function updateViewBudsjett() {
    document.getElementById('app').innerHTML = /*html*/ `
            Logget in som: ${model.app.currentUser}<button onclick="logut()">Log ut</button><br>
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
           
            `;
}

// function createBudsjett() {
//     if (model.app.currentUser = model.brukere[i].brukernavn) {
//         for (let i = 0; i < model.brukere.produkter[i].length; i++) {
//             html += `<div><button onclick='deleteThis(${i})'>x</button> ${model.produkter[i].name}  <tt>
//              kr ${model.produkter[i].price} </tt></div>`
//         }
//         html += `</br>Sum: <tt>${model.totalsum} </tt>kr,- <hr>
//     Rest budsjett: <tt>${restbudsjett} </tt>kr,-</br>
//     Total budsjett: <tt>${totalbudsjett} </tt>kr,-`;
//         return html;
//     }
// }
// ${createBudsjett()}