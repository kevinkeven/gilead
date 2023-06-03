# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18.16.0-slim as build

# Add the source code to app
COPY . /gilead

# Set the working directory
WORKDIR /gilead


# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN ng build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build gilead/dist/gilead /usr/share/nginx/html

# Expose port 80
EXPOSE 80
