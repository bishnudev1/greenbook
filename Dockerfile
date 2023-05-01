# Use an official Node.js runtime as a parent image for the client
FROM node:14 AS client

# Set the working directory to /app/client
WORKDIR /app/client

# Copy the client folder contents into the container at /app/client
COPY client/ .

# Install any needed packages for the client
RUN npm install

# Build the client app
RUN npm run build

# Use an official Node.js runtime as a parent image for the server
FROM node:14 AS server

# Set the working directory to /app/server
WORKDIR /app/server

# Copy the server folder contents into the container at /app/server
COPY server/ .

# Install any needed packages for the server
RUN npm install

# Expose port 5000 for the Node.js server
EXPOSE 5000

# Start the server
CMD ["npm", "start"]

# Copy the built client app from the client image to the server image
COPY --from=client /app/client/build /app/server/public
