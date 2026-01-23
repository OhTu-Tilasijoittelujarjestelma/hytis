FROM node:20
WORKDIR /usr/src/app/backend

# Install the application dependencies
COPY package* ./
RUN npm ci
# Copy in the source code
COPY . .
# Expose port WIP
EXPOSE 3000

RUN chmod -R 777 *


# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

CMD [ "npm", "run", "start"]
#CMD ["bash"]