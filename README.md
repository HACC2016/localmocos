# Made In Hawaii
An app to find Hawaii products! Created by Bryce Saito, Javen Nakamoto, Lisa Zhou, Nikki Kobayashi, and Steven Yamashiro.

## How To Use
* Clone the repository

* Navigate to the directory and install dependencies: `npm install`

* Install Postgres
  * Create a database titled `hacc_made_in_hawaii`

* Initialize the project by running: `sequelize init`
  * In the config folder, edit the config.json file with your username, password, database name, and change dialect to `postgres`.
  * Run migrations: `sequelize db:migrate`
  * Seed the database: `sequelize db:seed:all`

* Run `gulp` and save the styles.scss file to compile a public css file

* Run the server: `nodemon server.js`
