# Use Node.js version 18 based on Alpine Linux (lightweight image)
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json from the local 'app' folder to the container
COPY app/package*.json ./

# Install project dependencies inside the container
RUN npm install

# Copy all remaining application files from the local 'app' folder into the container
COPY app/ .

# Expose port 3000 so it can be accessed from outside the container
EXPOSE 3000

# Run the app using the "start" script defined in package.json
CMD ["npm", "start"]

