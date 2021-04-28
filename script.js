var shoppingList = ["Eggs","Pickles","Ham","Milk"];

const container = document.querySelector('#container');
let newElement = document.createElement("h1");



for (let index = 0; index < 10; index++) {

    newElement = document.createElement("h1");
    newElement.textContent = "new stuff here" +index;
    container.appendChild(newElement);

}


// var lunchBox ={
// drink: "Water",
// sandwich: "Ham",
// desert:"Oreos",
// chips:"Sun-chips",
// veggies:"brocolli"
// };
// document.write(lunchBox.drink)