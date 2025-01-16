import { Bank } from "../src/bank";

const accounts = [
  { id: 1234567890, balance: 5000 },
  { id: 2345678901, balance: 10000 },
];

const usernames = ["user1", "user2"];

const bank = new Bank(accounts, usernames);

// Scenario 1 : successful deposit of money

try {
  bank.depositMoney(1234567890, 1000);
  if (bank.checkBalance(1234567890) === 6000) {
    console.log("Scenario 1 passed");
  } else {
    console.log("Scenario 1 failed");
  }
} catch (e) {
  console.log("Scenario 1 failed");
}

// Scenario 2 : unsuccessful deposit of money due to invalid account id

try {
  bank.depositMoney(123, 1000);
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// Scenario 3 : unsuccessful deposit of money due to non existent account id

try {
  bank.depositMoney(1234567892, 1000);
  console.log("Scenario 3 failed");
} catch (e) {
  console.log("Scenario 3 passed");
}

// Scenario 4 : unsuccessful deposit of money due to negative amount

try {
  bank.depositMoney(2345678901, -1000);
  console.log("Scenario 4 failed");
} catch (e) {
  console.log("Scenario 4 passed");
}
