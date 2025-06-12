// app/admin/page.tsx

import { MoodEntry } from "@/utils/moods"

async function getMoods() {
  const res = await fetch("http://localhost:3000/api/mood", {
    cache: "no-store",
  })
  return res.json()
}

export default async function AdminPage() {
  const data: MoodEntry[] = await getMoods()

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-4">Mood Submissions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Mood</th>
              <th className="p-2 text-left">Comment</th>
              <th className="p-2 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{entry.mood}</td>
                <td className="p-2">{entry.comment || "—"}</td>
                <td className="p-2">{new Date(entry.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
