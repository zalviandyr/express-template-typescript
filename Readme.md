# Template Typescript for Express JS

## Installation

- Install dependencies
  ```bash
  > npm i
  ```
- Build server
  ```bash
  > npm run build
  ```
- Run server
  ```bash
  > npm start
  ```
- Server listening on `http://127.0.0.1:4000`

## Development
- Watch build
  ```bash
  > tsc --watch
  ```
- Run server
  ```bash
  > nodemon dist/server
  ```

## Heroku Deploy

- Create app
  ```bash
  > heroku create <app_name>
  ```
- Deploy
  ```bash
  > git add .
  > git commit -m '<message>'
  > git push heroku main
  ```
