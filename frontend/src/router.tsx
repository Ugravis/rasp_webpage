import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import More from "./routes/More"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/more" element={<More />} />
    </Routes>
  )
}