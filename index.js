// Create a starting array of free lancers

const p = document.querySelector("p");
const prices = [
    {name:"Alice", occupation:"Writer", startingPrice: 30},
    {name:"Bob", occupation:"Teacher", startingPrice: 50},
    {name:"Carol", occupationg:"Programmer", startingPrice: 70}
];
//Print array to document
const freelancelistDiv = document.getElementById("freelancer-list")

//function to calculate average starting price
 p.textContent = "Average Freelancer starting price is"
