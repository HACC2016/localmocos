# Made In Hawaii
An app to find Hawaii products! Created by [Bryce Saito](https://github.com/tokumori), [Javen Nakamoto](https://github.com/javenkn), [Lisa Zhou](https://github.com/lisazhou), [Nikki Kobayashi](https://github.com/ynikki), and [Steven Yamashiro](https://github.com/SpaceKins).

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
