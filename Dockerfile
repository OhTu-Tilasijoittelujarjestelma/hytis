FROM node:25
WORKDIR /usr/src/app

# Install the application dependencies
COPY . .
RUN npm install:all
# Copy in the source code

RUN chmod -R 777 *
ENV NODE_ENV=production
ENV DATABASE_URL='postgresql://neondb_owner:npg_XpTUAvmjn1C4@ep-shiny-field-agupt0rb-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

#RUN npm run tsc
RUN npm run build:frontend
RUN npm run build:backend
RUN cp -r frontend/dist backend/build 
# Expose port WIP
EXPOSE 3000
CMD ["node", "backend/build/src/index.js"]
#CMD [ "/bin/bash"]

#alla oleva buildaa imagen, toimii vain toukon käyttäjällä (ehkä)
# docker build frontend/ -t l0uko/sijoittaja-frontend

#runnin pitäisi toimia kaikilla
# docker run -t -p 4173:4173 l0uko/sijoittaja-frontend:latest 
