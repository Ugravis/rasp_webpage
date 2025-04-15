import { JSX, useEffect, useState } from "react"

export default function ThemeSwitch(): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

  useEffect((): void => {
    const savedTheme: string | null = localStorage.getItem('theme')
    const isInitiallyDark: boolean = savedTheme === null || savedTheme === 'dark'
    setIsDarkTheme(isInitiallyDark)
    
    if(isInitiallyDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    updateThemeColorMeta(isInitiallyDark)
  }, [])

  const updateThemeColorMeta = (isDark: boolean) => {
    let metaTag = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.name = 'theme-color'
      document.head.appendChild(metaTag)
    }
    metaTag.content = isDark ? '#0f172a' : '#ffffff'
  }

  const toggleTheme = (): void => {
    const newThemeIsDark: boolean = !isDarkTheme
    setIsDarkTheme(newThemeIsDark)
    localStorage.setItem('theme', newThemeIsDark ? 'dark' : 'light')
    
    if(newThemeIsDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    updateThemeColorMeta(newThemeIsDark)
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkTheme ? (
        <span className="material-icons-round !text-[16px] cursor-pointer">light_mode</span>
      ) : (
        <span className="material-icons-round !text-[16px] cursor-pointer">dark_mode</span>
      )}
    </button>
  )
}