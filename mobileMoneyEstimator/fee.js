function estimateTransactionFee(amountToSend) {
  // Transaction Fees 
  let transactionCharge = 0.015 * amountToSend;

  // Rules
  if(transactionCharge < 10){
    transactionCharge = 10;
  }
  if (transactionCharge > 70){
    transactionCharge = 70;
  }
 
 
  // Fare Calculation
   const totalDebit = transactionCharge + amountToSend  
   
   
 //Result
  console.log(`Sending KES ${amountToSend}:`);
  console.log(` Calculated Transaction Fee: KES ${transactionCharge}`);
  console.log(`Total amount to be debited: KES ${totalDebit}`)
  console.log(`Send Money Securely!`)
}

// Prompt
const userInput = prompt("Unatuma ngapi? (KES):");
const amountToSend = Number(userInput);

// Check if user input is a valid number
if (amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please enter a valid amount of money in KES.");
}

