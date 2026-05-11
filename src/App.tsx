import './App.css'
import './components/Navbar.tsx'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Button} from "@/components/ui/button.tsx";

function App() {

  return (
    <>
     <Navbar />
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Click me</Button>
        </div>
        <div className="uppersection flex text-5xl font-roboot font-semibold gap-2 p-6 w-full pl-25 ml-2">Hello,
        <div className="uppersection text-5xl font-roboot font-semibold opacity-60"> Start planning today</div> </div>
        <Footer />
    </>
  )
}

export default App
