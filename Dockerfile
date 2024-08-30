# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g ganache-cli
RUN npm install

# Install Hardhat and Waffle dependencies
RUN npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai

# Copy the rest of the application code
COPY . .

# Expose the port Ganache will run on
EXPOSE 8545

# Start Ganache and deploy the contract
CMD ganache-cli -h 0.0.0.0 & sleep 5 && npx hardhat run scripts/deploy.js --network localhost && tail -f /dev/null