# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g ganache-cli
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Ganache will run on
EXPOSE 8545

# Expose the port your Node.js app will run on
EXPOSE 3000

# Start Ganache and the Node.js application
CMD ganache-cli -h 0.0.0.0 & npx hardhat run deploy.js --network localhost && npm run dev