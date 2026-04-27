import pool from "@/lib/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await pool.query("SELECT * FROM students")
  return NextResponse.json(res.rows)
}