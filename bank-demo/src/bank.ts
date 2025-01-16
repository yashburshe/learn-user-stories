import { BankType, AccountType } from "./types";

/**
 * This class implements a bank that can 
 * maintain accounts and create new accounts
 */
export class Bank implements BankType {
    private accounts: AccountType[] = []
    private usernames: string[] = []

    /**
     * Finds an account with the given id
     * @param id - account id
     * @returns account with the given id
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * Checks if the account number is invalid
     * @param accountNumber - account number
     * @returns - true if the account number is invalid
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    /**
     * Checks if the username already exists
     * @param username - username
     * @returns - true if the username already exists
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * The constructor initializes the bank with the 
     * accounts and usernames provided
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * Creates a new bank account.
     *
     * @param username - The username of the account holder.
     * @param age - The age of the account holder. Must be 18 or above.
     * @param accountNumber - The unique account number for the new account.
     * @returns The newly created account.
     * @throws Will throw an error if the account number is invalid.
     * @throws Will throw an error if the username already exists.
     * @throws Will throw an error if the age is below 18.
     * @throws Will throw an error if an account with the given account number already exists.
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {

        if(this.isAccountNumberInvalid(accountNumber)) {
            throw new Error("Invalid account number");
        }

        if(!this.isUsernameExists(username)) {
            throw new Error("Username already exists");
        }

        if(age < 18) {
            throw new Error("Age must be 18 or above");
        }

        if(this.findAccountById(accountNumber)) {
            throw new Error("Account already exists");
        }

        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
}