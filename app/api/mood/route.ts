// app/api/mood/route.ts
import { moods } from "@/lib/moods"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(moods)
}

export async function POST(request: NextRequest) {
  const { mood, comment } = await request.json()
  const timestamp = new Date().toISOString()

  moods.push({ mood, comment, timestamp })
  return NextResponse.json({ success: true })
}
