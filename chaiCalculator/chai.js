function calculateChaiIngredients(numberOfCups) {
  // Ingredient per cup
  const waterPerCup = 200;   // in ml
  const milkPerCup = 50;     // in ml
  const teaLeavesPerCup = 1;   // tablespoon
  const sugarPerCup = 2;      // teaspoon

  //Total ingredients calculator
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  //Result
  console.log(`To make  ${numberOfCups} cup(s) of Kenyan chai you will need:`);
  console.log(` Water: ${totalWater} ml`);
  console.log(` Milk: ${totalMilk} ml`);
  console.log(` Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
  console.log(` Sugar (Sukari): ${totalSugar} teaspoon(s)`);
  console.log(`Enjoy your Chai Bora!`)
}

// Prompt
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(userInput);

// Check if user input is a valid number
if (numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid positive number.");
}

