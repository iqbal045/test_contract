# River House Project

This project demonstrates a simple setup for deploying and interacting with a smart contract using Hardhat, Truffle, and Express.js.

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Hardhat
- Truffle
- Ganache (for local Ethereum blockchain)

## Setup

1. **Install dependencies:**

    ```sh
    npm install
    ```

2. **Start Ganache:**

    Open Ganache and make sure it is running on `http://127.0.0.1:8545`.

3. **Compile the smart contracts:**

    ```sh
    npx hardhat compile
    ```

4. **Deploy the smart contracts:**

    ```sh
    npx hardhat run deploy.js --network localhost
    ```

5. **Update the contract address:**

    After deploying the contract, update the `contractAddress` in [app.js](app.js) with the deployed contract address.

## Running the Application

1. **Start the Express server:**

    ```sh
    npm run dev
    ```

2. **Access the API:**

    Open your browser and navigate to `http://localhost:3000/iqbal-test-api` to interact with the smart contract.
