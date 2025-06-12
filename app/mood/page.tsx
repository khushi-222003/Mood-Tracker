// app/mood/page.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function MoodPage() {
  const [mood, setMood] = useState("")
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!mood) return

    await fetch("/api/mood", {
      method: "POST",
      body: JSON.stringify({ mood, comment }),
    })

    setSubmitted(true)
  }

  if (submitted) {
    return <div className="text-center mt-20 text-xl">Thanks for sharing your mood!</div>
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-center">How are you feeling?</h2>

      <div className="flex justify-center gap-4 text-4xl">
        <button onClick={() => setMood("happy")} className={mood === "happy" ? "scale-110" : ""}>😄</button>
        <button onClick={() => setMood("neutral")} className={mood === "neutral" ? "scale-110" : ""}>😐</button>
        <button onClick={() => setMood("sad")} className={mood === "sad" ? "scale-110" : ""}>😞</button>
      </div>

      <textarea
        placeholder="Optional comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border rounded p-2"
      />

      <Button onClick={handleSubmit} disabled={!mood}>
        Submit
      </Button>
    </div>
  )
}
