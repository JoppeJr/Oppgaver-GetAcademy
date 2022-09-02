 //controller
 function logut() {
     model.currentPage = 'login';
     model.currentUser = '';
     console.log('log ut')
     updateView();
 }

 function addObjectToList() {
     let User = model.brukere[model.userIndex];
     let newProduct = {};
     newProduct.name = model.inputs.budsjett.name;
     newProduct.price = parseInt(model.inputs.budsjett.price);
     newProduct.quantity = 1;

     //User.totalsum = 0;
     if (model.inputs.budsjett.name.length == 0) return;
     if (User.produkter.length == 0) {
         User.produkter.push(newProduct);
     } else {
         let haveadded = false;
         for (let i = 0; i < User.produkter.length; i++) {
             if (User.produkter[i].name == newProduct.name) {
                 User.produkter[i].quantity++
                     haveadded = true;
             }
         }
         if (haveadded == false) {
             User.produkter.push(newProduct)
         }
     }

     //  if (model.inputs.budsjett.name != '') {
     //      User.produkter.push({
     //          name: model.inputs.budsjett.name,
     //          price: parseInt(model.inputs.budsjett.price)
     //      });
     //      model.inputs.budsjett.name = '';
     //      model.inputs.budsjett.price = 0;
     //  }

     User.totalsum = 0;
     for (let i = 0; i < User.produkter.length; i++) {

         User.totalsum += parseInt(User.produkter[i].price * User.produkter[i].quantity);
     }
     //  User.totalsum += tempSum;
     User.restbudsjett = User.totalbudsjett - User.totalsum;
     console.log(User.produkter)
     model.inputs.budsjett.name = '';
     model.inputs.budsjett.price = 0;
     updateViewBudsjett();

 }

 function addbudsjett() {
     model.brukere[model.userIndex].totalbudsjett = model.inputs.budsjett.totalbudsjett; //.value;
     model.brukere[model.userIndex].restbudsjett = model.brukere[model.userIndex].totalbudsjett - model.brukere[model.userIndex].totalsum || 0;
     updateViewBudsjett();

 }

 function deleteThis(indexValue) {
     let bruker = model.brukere[model.userIndex];
     bruker.totalsum -= parseInt(bruker.produkter[indexValue].price);
     bruker.restbudsjett = parseInt(bruker.restbudsjett) + parseInt(bruker.produkter[indexValue].price);
     model.brukere[model.userIndex].produkter.splice(indexValue, 1);
     updateViewBudsjett();
 }

 function tøm() {
     model.brukere[model.userIndex].produkter = [];
     model.brukere[model.userIndex].totalsum = 0;
     model.brukere[model.userIndex].totalbudsjett = 0;
     model.brukere[model.userIndex].restbudsjett = 0;

     updateViewBudsjett();
 }
 //  window.onload = (event) => {
 //      restbudsjett = localStorage.getItem(restbudsjett) === null ? 0 : parseInt(localStorage.getItem("restbudsjett"));
 //      addObjectToList();
 //      totalbudsjett = localStorage.getItem(totalbudsjett) === null ? 0 : parseInt(localStorage.getItem("totalbudsjett"));
 //      addbudsjett();
 //  };