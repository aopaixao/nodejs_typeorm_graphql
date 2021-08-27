"use strict";
const dotenv = require("dotenv");
dotenv.config();
const database = {
    development: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "123456",
        database: "ecommerce_nodejs",
        entities: [
            "dist/**/*.model.js"
        ],
        synchronize: false
    },
    test: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,
        entities: [
            "src/**/*.model.ts"
        ],
        synchronize: true,
        dropSchema: false,
        migrationsRun: false,
        migrations: [
            "src/database/migrations/*.ts"
        ],
        cli: {
            migrationsDir: "src/database/migrations"
        },
        keepConnectionAlive: true
    }
};
const DatabaseConfig = () => (Object.assign({}, database[process.env.NODE_ENV]));
module.exports = DatabaseConfig;
//# sourceMappingURL=database.config.js.map