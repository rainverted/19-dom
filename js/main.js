/*
Surasti visus ingredientus ir ju pavadinimus atspauzdinti i console

Visu ingredienu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console


*/
//surandame sarasa esanti html'e
const liDOM = document.querySelectorAll('li');
console.log(liDOM);

//sukuriame tuscia sarasa
const ingredientai = [];

//sukame cikla pagal html sarasa ir push. metodu sustumiame i sarasa + raides padarome didziosiomis 
for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText.toUpperCase();
    ingredientai.push(ingredientas)
}


console.log(ingredientai);
