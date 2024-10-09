# Bank Application

## Description

This is a simple bank application built with Node.js and TypeScript. It allows adding customers and managers, and provides functionalities for customers to check balances, withdraw, deposit, and transfer funds. Managers can see the total balance of the bank. All interactions are done via tests using Jest.

## Project Structure

```
|-- /src
| |-- bank.ts
| |-- bank.test.ts
| |-- index.ts
|-- jest.config.js
|-- tsconfig.json
|-- package.json
|-- README.md
```

## Design Choices

- **Functional Programming**: The application is designed using functional programming principles to ensure immutability and simplicity.
- **TypeScript**: TypeScript is used for type safety and better code maintainability.
- **Jest**: Jest is used for testing to ensure all functionalities work as expected.
- **No Persistence**: As per the requirements, no database or persistence layer is implemented. All data is stored in memory.
- **Resetting Users**: The `resetUsers` function is used to reset the users array before each test to ensure isolation between tests.
- **Boolean responses**: Boolean responses are used to indicate whether the operation was successful.

## Setup

1. Clone the repository

```
git clone git@github.com:jordanwoodroffe/autograb-bank-app.git
cd autograb-bank-app
```

2. Install dependencies:

```
npm install
```

3. Run the tests

```
npm test
```

Explanation of Tests

- **bank.test.ts**: Contains all the tests for the bank application.
- **add customer**: Tests adding a customer and checking their balance.
- **add manager**: Tests adding a manager.
- **withdraw more than balance**: Tests that a customer cannot withdraw more than their balance.
- **deposit**: Tests that a customer can deposit money.
- **transfer**: Tests that a customer can transfer money to another customer.
- **get total bank balance for manager**: Tests that a manager can get the total bank balance.
- **customer cannot get total bank balance**: Tests that a customer cannot get the total bank balance.
