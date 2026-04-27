import { NextRequest, NextResponse } from "next/server";
import { students } from "../../data";

export async function GET(req:NextRequest,{params}:{params:Promise<{id: string}>}) {
  const {id} = await params
  const numericID=Number(id)
  const student=students.find((s)=> s.id === numericID)
  if(!student) {
    return NextResponse.json({message:"Student Not Found"},{status:404})
  }
  return NextResponse.json(student)
}

export async function PUT(req:NextRequest,{params}:{params:Promise<{id: string}>}) {
  const {id} = await params
  const numericID = Number(id)
  const data = await req.json()
  const index = students.findIndex((s)=> s.id === numericID)
  if(index==-1) {
    return NextResponse.json({message:"Student Not Found"},{status:404})
  }
  students[index].name = data.name
  return NextResponse.json({message:"Student Updated"})
}

export async function DELETE(req:NextRequest,{params}:{params:Promise<{id: string}>}) {
  const {id} = await params
  const numericID = Number(id)
  const index = students.findIndex((s)=> s.id === numericID)
  if(index===-1) {
    return NextResponse.json({message:"Student Not Found"}),{status:404}
  }
  students.splice(index,1)
  return NextResponse.json({message:"Student Deleted"})
}