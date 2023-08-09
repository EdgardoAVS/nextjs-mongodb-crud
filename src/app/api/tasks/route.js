import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB() 
  const tasks = await Task.find()
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json()
  const newTask = new Task(data)
  console.log(newTask)
  return NextResponse.json({
    message: "Creando tarea",
  });
}
