# Stage 1: Build the React app
FROM node:14 as build

# Set the working directory in the container
WORKDIR /build

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire React app code into the container
COPY public/ public

COPY src/ src

# Build the React app
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx web server directory
COPY --from=build /build/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 3000

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
