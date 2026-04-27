import connection from "@/lib/mongodb"
import user from "@/app/models/user"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connection()

    const id = Number(params.id) // convert string to number

    const User = await user.findOne({ ACTNO: id })

    if (!User) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(User)
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}