import express from 'express';
import  PatientRouter  from "./routes/patientRoutes";
import { initializeDataSource } from "./Database/database";
import {config} from "dotenv";
import {errorHandlingMiddleware} from "./middleware/ErrorHandlingMiddleware";
import morgan from "morgan";
import logger from "./winston/WinstonLogger";

config({path: "./src/.env"});
const app = express();
app.use(express.json());
app.use(morgan('combined', { stream: { write: message => logger.info(message)}}));
app.use('/patient', PatientRouter);
app.use(errorHandlingMiddleware);

const startServer = async () => {
    try {
        await initializeDataSource();
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error during Data Source initialization', error);
    }
};

startServer().then(r => r).catch(e => console.error(e));

