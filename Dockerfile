# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the server runs on
EXPOSE 8080

# Start the server
CMD ["node", "app.js"]


gcloud container clusters create kubia-v2 \
  --num-nodes 1 \
  --machine-type e2-small \
  --region us-west1 \
  --enable-ip-alias \
  --enable-private-nodes \
  --master-ipv4-cidr 172.16.0.32/28 \
  --disk-size 50 \
  --disk-type pd-standard \
  --enable-master-authorized-networks \
  --master-authorized-networks 98.232.12.218/32