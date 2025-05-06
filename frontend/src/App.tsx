import { BrowserRouter } from "react-router-dom"
import AppRoutes from './router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="m-[40px]">
        <Navbar />
      </div>
      <main className="grow flex flex-col mx-[10vw]">
        <AppRoutes />
      </main>
      <div className="m-[40px]">
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
