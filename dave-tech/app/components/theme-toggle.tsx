"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
      style={{
        background: theme === "dark" 
          ? 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(6, 182, 212, 0.2))' 
          : 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))',
        border: '2px solid rgba(45, 212, 191, 0.3)',
      }}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-teal-400" />
      ) : (
        <Moon className="w-5 h-5 text-teal-600" />
      )}
    </button>
  )
}