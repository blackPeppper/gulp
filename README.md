# Gulp v4 Boilerplate

A powerful gulp-based boilerplate for better front-end coding with __Gulp v4__, __Pug__ and __Sass__.

## Quickstart

1. Install the [node.js](https://nodejs.org/en/)
2. Clone the project

    ```bash
    git clone https://github.com/ousszizou/gulpv4-boilerplate.git my-project
    ```

3. Go to project folder and run

    ```bash
    npm install
    ```

4. Start development mode

    ```bash
    npm run gulp:dev
    ```

5. In browser open page with address [http://localhost:3000/](http://localhost:3000/)

## Main tasks

- npm run gulp:dev -  launches watchers and server & compile project.
- npm run gulp:build - optimize & minify files for production version.

#if find version err (gyp) try this


```bash
npm i gulp bootstrap gulp-util @babel/core @babel/preset-env browser-sync cross-env del gulp-babel gulp-clean-css  gulp-concat gulp-if gulp-imagemin gulp-inject gulp-notify gulp-plumber gulp-pug gulp-sass gulp-uglify-es gulp-util gulplog node-notifier -D
```