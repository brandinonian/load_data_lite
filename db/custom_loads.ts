import { SQLiteDatabase } from "expo-sqlite";
import { CustomLoad, NewCustomLoadData } from "./types";

export async function GetRecentCustomLoads(
  db: SQLiteDatabase,
  limit?: number,
): Promise<CustomLoad[] | null> {
  const limitString = limit ? ` LIMIT ${limit};` : ";";
  const sql = `SELECT * FROM custom_loads ORDER BY updated_at ASC${limitString};`;

  const result = await db.getAllAsync<CustomLoad>(sql);

  if (result.length < 1) {
    return null;
  }

  return result;
}

//  name: string;
//  status: string;
//  cartridge: string;
//  coal: string;
//  case: string;
//  case_len: string;
//  bullet: string;
//  powder: string;
//  primer: string;
//  created_at: string;
//  updated_at: string;
export async function AddCustomLoad(
  db: SQLiteDatabase,
  data: NewCustomLoadData,
): Promise<string | null> {
  const sql = `INSERT INTO custom_loads (name, cartridge, coal, case_name, case_len, bullet, powder, primer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const result = await db
    .runAsync(
      sql,
      data.name,
      data.cartridge,
      data.coal,
      data.case_name,
      data.case_len,
      data.bullet,
      data.powder,
      data.primer,
    )
    .catch((err) => {
      return err;
    });

  if (result.lastInsertRowId && result.lastInsertRowId != 0) return null;

  return "Error inserting custom load";
}
