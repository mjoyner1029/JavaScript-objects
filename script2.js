// Constructor function for creating Account objects
function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

// Method to deposit funds into the account
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log('Deposit amount must be greater than zero.');
    }
};

// Method to withdraw funds from the account
Account.prototype.withdraw = function(amount) {
    if (amount > 0) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds.');
        }
    } else {
        console.log('Withdrawal amount must be greater than zero.');
    }
};

// Method to calculate compound interest
Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
    if (rate > 0 && timesCompounded > 0 && years > 0) {
        const principal = this.balance;
        const compoundInterest = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
        return compoundInterest - principal;
    } else {
        console.log('Invalid parameters for interest calculation.');
        return 0;
    }
};

// Example usage of the banking application
function runBankingExample() {
    // Create new accounts
    const account1 = new Account('123456789', 'Alice', 1000);
    const account2 = new Account('987654321', 'Bob', 500);

    // Display initial balances
    console.log(`Account 1 - ${account1.owner}: $${account1.balance}`);
    console.log(`Account 2 - ${account2.owner}: $${account2.balance}`);

    // Deposit funds
    account1.deposit(500);
    account2.deposit(200);

    // Withdraw funds
    account1.withdraw(200);
    account2.withdraw(100);

    // Calculate compound interest
    const interest1 = account1.calculateCompoundInterest(0.05, 4, 5); // 5% interest compounded quarterly for 5 years
    const interest2 = account2.calculateCompoundInterest(0.03, 12, 3); // 3% interest compounded monthly for 3 years

    console.log(`Account 1 - Compound Interest: $${interest1.toFixed(2)}`);
    console.log(`Account 2 - Compound Interest: $${interest2.toFixed(2)}`);

    // Display final balances
    console.log(`Final balance for ${account1.owner}: $${account1.balance}`);
    console.log(`Final balance for ${account2.owner}: $${account2.balance}`);
}

// Run the banking example
runBankingExample();
