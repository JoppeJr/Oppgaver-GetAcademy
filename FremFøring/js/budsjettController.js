 //controller
 function logut() {
     model.app.currentPage = 'login';
     model.app.currentUser = '';
     console.log('log ut')
     updateView();
 }

 function addObjectToList() {
     model.totalsum = 0;
     if (model.inputs.name != '') {
         model.produkter.push({
             name: model.inputs.name,
             price: parseInt(model.inputs.price)
         });
         model.inputs.name = '';
         model.inputs.price = 0;
     }
     for (let i = 0; i < model.produkter.length; i++) {
         model.totalsum += parseInt(model.produkter[i].price);
     }
     restbudsjett = totalbudsjett - model.totalsum;
     updateView();
     localStorage.setItem("restbudsjett", restbudsjett);
 }

 function addbudsjett() {
     totalbudsjett.value;
     restbudsjett = totalbudsjett - model.totalsum;
     updateView();
     localStorage.setItem("totalbudsjett", totalbudsjett);
 }

 function deleteThis(indexValue) {
     model.totalsum -= parseInt(model.produkter[indexValue].price);
     restbudsjett = parseInt(restbudsjett) + parseInt(model.produkter[indexValue].price);
     model.produkter.splice(indexValue, 1);
     updateView();
 }

 function tøm() {
     model.produkter = [];
     model.totalsum = 0;
     totalbudsjett = 0;
     restbudsjett = 0;
     localStorage.setItem("restbudsjett", restbudsjett);
     localStorage.setItem("totalbudsjett", totalbudsjett);
     updateView();
 }
 //  window.onload = (event) => {
 //      restbudsjett = localStorage.getItem(restbudsjett) === null ? 0 : parseInt(localStorage.getItem("restbudsjett"));
 //      addObjectToList();
 //      totalbudsjett = localStorage.getItem(totalbudsjett) === null ? 0 : parseInt(localStorage.getItem("totalbudsjett"));
 //      addbudsjett();
 //  };