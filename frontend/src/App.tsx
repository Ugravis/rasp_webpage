import { BrowserRouter } from "react-router-dom"
import AppRoutes from './router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="grow flex flex-col">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
