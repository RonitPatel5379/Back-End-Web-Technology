import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [row] = await pool.query("SELECT * FROM users")
    return NextResponse.json(row)
  } catch(err) {
    return NextResponse.json({message:"Internal Server Error"},{status:500})
  }
} 