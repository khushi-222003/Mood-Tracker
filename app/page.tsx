// app/page.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6 text-center px-4">
      <h1 className="text-4xl font-bold">Welcome to Mood Tracker</h1>
      <p className="text-lg text-gray-600">Let us know how you are feeling today</p>
      <Link href="/mood">
        <Button>Submit Your Mood</Button>
      </Link>
    </main>
  )
}
