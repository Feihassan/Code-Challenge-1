function calculateChaiIngredients(numberOfCups) {
    // Step 1: Calculate the ingredients needed for the given number of cups
  const water = numberOfCups * 200; // ml
  const milk = numberOfCups * 50;   // ml
  const teaLeaves = numberOfCups * 1; // tablespoons
  const sugar = numberOfCups * 2;   // teaspoons

    // Step 2: Display the ingredients needed
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon(s)`);
  console.log(`\nEnjoy your Chai Bora!`);
}

// Step 3: Ask the user how many cups they want
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(userInput);

// Step 4: Check if input is valid and run the function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}

