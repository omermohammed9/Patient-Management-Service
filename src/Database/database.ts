import { DataSource } from 'typeorm';
import {getPostgresDataSourceOptions} from "./PostgresDataSourceOptions";

 //@ts-ignore
const AppDataSource = new DataSource(getPostgresDataSourceOptions())
export const initializeDataSource = async () => {
   try {
      await AppDataSource.initialize();
      console.log("Database connected successfully.");
   } catch (error) {
      console.error("Error during Data Source initialization", error);
      throw error;
   }};

export default AppDataSource;