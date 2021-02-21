import { Sequelize } from 'sequelize';
import config from './../config'

const db = new Sequelize(config.dbConfig.db, config.dbConfig.user, config.dbConfig.password, {
    host: config.dbConfig.host,
    port: config.dbConfig.port,
    dialect: 'mssql',
    dialectOptions: {
        requestTimeout: 30000, // timeout = 30 seconds
        options: {
            encrypt: true,
        }
    }
} );

export default db;