FROM node:9.4

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

RUN npm install

CMD ["/usr/src/app/run"]
