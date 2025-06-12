
export type MoodEntry = {
  mood: string
  comment?: string
  timestamp: string
}

export const moods: MoodEntry[] = [
  {
    mood: "Happy",
    comment: "Had a great day!",
    timestamp: new Date().toISOString(),
  },
 
]