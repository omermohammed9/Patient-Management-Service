// PostgresDataSourceOptions.ts
import Patient from "../entity/Patient";
import {config} from "dotenv";
import Subscriber from "./Subscriber";

config({path: "./src/.env"});

interface PostgresDataSourceOptions {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize?: boolean; // If true, TypeORM will synchronize the schema on startup
    logging?: boolean; // Enable logging
    entities: Function[]; // Array of paths to entity files
    subscribers?: Function[]; // Array of paths to subscriber files
   // migrations?: Function[]; // Array of paths to migration files
}

//This function provides the database options, using environment variables for sensitive data.
export const getPostgresDataSourceOptions = (): PostgresDataSourceOptions => {
    return {
        type: String(process.env.DB_TYPE) || 'No Type Provided for Database',
        host: String(process.env.DB_HOST) || 'No Host Provided for Postgres',
        port: parseInt(process.env.DB_PORT || 'No Port Provided for Postgres' ),
        username: String(process.env.DB_USERNAME) || 'No Username Provided for Postgres',
        password: String(process.env.DB_PASSWORD) || 'No Password Provided for Postgres',
        database: String(process.env.DB_DATABASE) || 'No Database Provided for Postgres',
        synchronize: true, // Be cautious with this in production!
        logging: false,
        entities:  [
            Patient
        ],
        subscribers: [
            Subscriber
        ],
        // migrations: [
        //     PatientMigration1699631664469
        // ]
    };
}
