import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/more">More</Link>
    </nav>
  )
}