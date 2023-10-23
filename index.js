//Create initial array with prices
const prices = [
    {name:"Alice", occupation:"Writer", startingPrice: 30},
    {name:"Bob", occupation:"Teacher", startingPrice: 50},
    {name:"Carol", occupation:"Programmer", startingPrice: 70}
];

// Creates table for array on document

const tableBody = document.querySelector("#freelancer-table tbody");

prices.forEach(freelancer => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>$${freelancer.startingPrice}</td>
    `;
    tableBody.appendChild(row);
});

//function to calculate Average from array

function calculateAverage(prices) {
    if (prices/length === 0) {
        return 0;
    }
    const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
    return total / prices.length;
}

//function to extra starting price to a separate array
const startingPrice = prices.map(freelancer => freelancer.startingPrice);

//calculate average starting price
const averageStartingPrice = calculateAverage(averageStartingPrice);

//Prints average price to document
const p = document.querySelector("p");
 p.textContent = `Average Freelancer starting price is $${averageStartingPrice.toFixed(2)}`;
