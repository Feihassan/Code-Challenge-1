function estimateTransactionFee(amountToSend) {
  const rawFee = amountToSend * 0.015;
  const fee = Math.min(Math.max(rawFee, 10), 70);
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("Send Money Securely! 📱");
}

const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);

if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Tafadhali andika kiasi halali cha kutuma.");
}
