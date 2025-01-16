import { Bank } from "../src/bank";

const accounts = [
  { id: 1234567890, balance: 5000 },
  { id: 2345678901, balance: 10000 },
];

const usernames = ["user1", "user2"];

const bank = new Bank(accounts, usernames);

// Scenario 1 : successful balance check

if (bank.checkBalance(1234567890) === 5000) {
  console.log("Scenario 1 passed");
} else {
  console.log("Scenario 1 failed");
}

// Scenario 2 : unsuccessful balance check due to invalid account number

try {
  bank.checkBalance(123);
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// Scenario 3 : unsuccessful balance check due to non existent account number

try {
  bank.checkBalance(1234567892);
  console.log("Scenario 3 failed");
} catch (e) {
  console.log("Scenario 3 passed");
}
