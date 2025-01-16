import { Bank } from "../src/bank";

const accounts = [
  { id: 1234567890, balance: 5000 },
  { id: 2345678901, balance: 10000 },
];

const usernames = ["user1", "user2"];

const bank = new Bank(accounts, usernames);

// Scenario 1 : successful withdrawal of money

try {
  bank.withdrawMoney(1234567890, 1000);
  if (bank.checkBalance(1234567890) === 4000) {
    console.log("Scenario 1 passed");
  } else {
    console.log("Scenario 1 failed");
  }
} catch (e) {
  console.log("Scenario 1 failed");
}

// Scenario 2 : unsuccessful withdrawal of money due to invalid account id

try {
  bank.withdrawMoney(123, 1000);
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// Scenario 3 : unsuccessful withdrawal of money due to non existent account id

try {
  bank.withdrawMoney(1234567892, 1000);
  console.log("Scenario 3 failed");
} catch (e) {
  console.log("Scenario 3 passed");
}

// Scenario 4 : unsuccessful withdrawal of money due to insufficient balance

try {
  bank.withdrawMoney(2345678901, 11000);
  console.log("Scenario 4 failed");
} catch (e) {
  console.log("Scenario 4 passed");
}

// Scenario 5 : unsuccessful withdrawal of money due to negative amount

try {
  bank.withdrawMoney(2345678901, -1000);
  console.log("Scenario 5 failed");
} catch (e) {
  console.log("Scenario 5 passed");
}
