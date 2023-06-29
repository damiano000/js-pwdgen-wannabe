//INIZIO
let nameUser = prompt("Inserisci il tuo nome:");
let surname = prompt("Inserisci il tuo cognome:");
let colorPrefer = prompt("Inserisci il tuo colore preferito:");

//Inserimento numero
let num= 21;

//Stampa in console nomecognomecolorepreferito21
console.log(nameUser+surname+colorPrefer+21);

//PRIMO NUMERO DIVISO il SECONDO E STAMPA
let firstNum = parseInt(prompt("Inserisci il primo numero: "));
let secondNum = parseInt(prompt("Inserisci il secondo numero: "));

let newNum = firstNum / secondNum; 

console.log(newNum); 

//Password stampa
let passwordkey = nameUser+surname+colorPrefer+newNum

console.log(passwordkey); 

//mostrare password generata su file html
document.getElementById("inputPassword6").value = passwordkey; 
