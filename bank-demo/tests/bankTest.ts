import { Bank } from "../src/bank";

const accounts = [
  { id: 1234567890, balance: 5000 },
  { id: 2345678901, balance: 10000 },
];

const usernames = ["user1", "user2"];

const bank = new Bank(accounts, usernames);

// Scenario 1 : successful account created

const acc = bank.createAccount("user1", 20, 3456789012);

if (
  acc.id !== 3456789012 ||
  acc.balance !== 0 ||
  acc.id.toString().length !== 10
) {
  console.log("Scenario 1 failed");
} else {
  console.log("Scenario 1 passed");
}

try {
  bank.createAccount("user1", 20, 3456789012);
  console.log("Scenario 1 failed");
} catch (e) {
  console.log("Scenario 1 passed");
}

// Scenario 2: unsuccessful account creation due to customer being below 19

try {
  bank.createAccount("user1", 17, 3456789019);
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
  bank.createAccount("user1", 20, 3456789);
  console.log("Scenario 3 failed");
} catch (e) {
  console.log("Scenario 3 passed");
}
