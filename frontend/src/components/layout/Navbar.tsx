import { JSX } from "react"
import { Link } from "react-router-dom"
import ThemeSwitch from "../ui/ThemeSwitch"

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex gap-4 justify-between">
      <div></div>
      
      <div className="flex gap-5 ml-[23px]">
        <Link to="/">Home</Link>
        <Link to="/more">More</Link>
      </div>

      <ThemeSwitch />
    </nav>
  )
}