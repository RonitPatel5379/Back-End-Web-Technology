import pool from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const {id} = await params
    
    const [rows]: any = await pool.query(
      "SELECT * FROM users WHERE UserID = ?",
      [id]
    )

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(rows[0])
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}