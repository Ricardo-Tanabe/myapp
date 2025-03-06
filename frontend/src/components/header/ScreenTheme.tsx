import { Sun, Moon } from "lucide-react"
import { ScreenThemeProp } from "./HeaderTypes"

export function ScreenTheme({theme, setTheme}: ScreenThemeProp) {
  const handleClickMoon = () => {
    setTheme("dark")
  }
  const handleClickSun = () => {
    setTheme("light")
  }
  return (
    <div className="flex items-center h-full">
    {(theme === "light") ?
      <Moon size={20} className="header-icon-menu" onClick={handleClickMoon} /> :
      <Sun size={20} className="header-icon-menu" onClick={handleClickSun} />}
    </div>
  )
}
