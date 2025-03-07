import { Sun, Moon } from "lucide-react"
import { ScreenThemeProp } from "./HeaderTypes"

export function ScreenTheme({theme, setTheme}: ScreenThemeProp) {
  
  return (
    <div className="flex items-center h-full">
    {(theme === "light") ?
      <Moon size={20} className="header-icon-menu" onClick={() => setTheme("dark")} /> :
      <Sun size={20} className="header-icon-menu" onClick={() => setTheme("light")} />}
    </div>
  )
}
