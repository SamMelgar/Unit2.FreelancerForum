
const tableBody = document.querySelector("#freelancer-table tbody");

// generates a random Freelancer 
function generateRandomFreelancer() {
    const names = ["Pete", "Mark", "Susan", "Dorothy", "Kansas", "Angel"];
    const occupations = ["Developer", "Tutor", "Consultant"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 30; // Generates random price between 30 and 129
    return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice.toFixed(0) };
}
// renders freelancer to table
function renderFreelancer(freelancer) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>$${freelancer.startingPrice}</td>
    `;
    tableBody.appendChild(row);
}
//inital array given
const prices = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 }
];
//renders prices
prices.forEach(freelancer => {
    renderFreelancer(freelancer);
});
// sets interval and pushes new freelancer
const addRandomFreelancer = setInterval(function() {
    const randomFreelancer = generateRandomFreelancer();
    prices.push(randomFreelancer);
    renderFreelancer(randomFreelancer);
    updateAveragePrice();
}, 1000); //every second


//calculates average for prices
function calculateAverage(prices) {
    if (prices.length === 0) {
        return 0;
    }
    const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / prices.length;
}