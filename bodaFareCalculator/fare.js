function calculateBodafare(distanceInKm) {
  // Fare Calculation rules
  const baseFare = 50;   // in Ksh
  const perKmCharge = 15;     // in Ksh
  

  // Fare Calculation
  const distanceFare = perKmCharge * distanceInKm
  const totalFare = baseFare + distanceFare

  //Result
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(` Ukikalia PikiPiki: ${baseFare}`);
  console.log(` Mpaka uko: ${distanceFare}`);
  console.log(`Total: Ksh ${totalFare}`)
  console.log(`Panda PikiPiki!`)
}

// Prompt
const userInput = prompt("Unafika wapi mkubwa? Kilometer ngapi?");
const distanceInKm = Number(userInput);

// Check if user input is a valid number
if (distanceInKm > 0) {
  calculateBodafare(distanceInKm);
} else {
  console.log("Please enter a valid positive number.");
}

