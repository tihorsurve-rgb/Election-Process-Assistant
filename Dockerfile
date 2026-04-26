# Use a tiny Nginx image to serve the static files
FROM nginx:alpine

# Copy the pre-built 'dist' folder from your local machine to the container
COPY dist /usr/share/nginx/html

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
