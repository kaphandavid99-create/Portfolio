"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem={false}
      defaultTheme="dark"
      forcedTheme={undefined}
      enableColorScheme={false}
      storageKey="dave-tech-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}