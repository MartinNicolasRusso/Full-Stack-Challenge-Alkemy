import app from './src/app.js'
import {sequelize} from './src/database/database.js'

async function main () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log('Server on port', 3000)
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }

}

main();