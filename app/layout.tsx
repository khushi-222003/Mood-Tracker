
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle"; 

export const metadata = {
  title: "Mini Mood Tracker",
  description: "Track your moods easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex justify-end p-4">
          <ThemeToggle /> {/* ✅ Light/Dark toggle */}
        </div>
        {children}
      </body>
    </html>
  );
}
