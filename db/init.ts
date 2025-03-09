import { SQLiteDatabase } from "expo-sqlite";

export async function InitDB(db: SQLiteDatabase) {
  await db.execAsync(`CREATE TABLE IF NOT EXISTS custom_loads (
    id INT PRIMARY KEY,
    name TEXT,
    status TEXT,
    cartridge TEXT,
    coal TEXT,
    bullet TEXT,
    case_name TEXT,
    case_len TEXT,
    powder TEXT,
    primer TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS factory_loads (
    id INT PRIMARY KEY,
    name TEXT,
    cartridge TEXT,
    bullet TEXT,
    brand TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`);
}
