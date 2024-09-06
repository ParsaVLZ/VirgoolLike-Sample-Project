import { config } from "dotenv";
import { join } from "path";
import { DataSource } from "typeorm";

config();
config({path: join(process.cwd(), ".env")});

const { DB_HOST,DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
let dataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    synchronize: false,
    entities: [
        "dist/**/**/**/*.entity{.ts,.js}",
        "dist/**/**/*.entity{.ts,.js}"
    ],
    migrations: [
        "dist/migrations/*{.ts, .js}"
    ],
    migrationsTableName: "virgool_migration_db"
});
export default dataSource