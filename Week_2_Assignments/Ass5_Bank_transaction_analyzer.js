const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() credit transactions
const creditTransactions = transactions.filter(
  txn => txn.type === "credit"
);

// 2. map() extract amounts
const amounts = transactions.map(txn => txn.amount);

// 3. reduce() final balance
const finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit"
    ? balance + txn.amount
    : balance - txn.amount;
}, 0);

// 4. find() first debit
const firstDebit = transactions.find(
  txn => txn.type === "debit"
);

// 5. findIndex() amount 10000
const index10000 = transactions.findIndex(
  txn => txn.amount === 10000
);

console.log(creditTransactions);
console.log(amounts);
console.log(finalBalance);
console.log(firstDebit);
console.log(index10000);