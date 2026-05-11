import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";

function App() {
    const today:Date = new Date();

    const day = today.toLocaleString("en-US",{
        weekday: "long",
    });

    const fullYearDetail:string = today.toLocaleString("en-UK",{
        day: "numeric",
        month: "long",
        year: "numeric"
    })
  return (
    <>
     <Navbar />

        {/*Upper Section*/}
        <div className="uppersection flex text-5xl font-roboot font-semibold gap-2 p-6 w-full pl-25 ml-2">Hello,
        <div className="uppersection text-5xl font-roboot font-semibold opacity-60"> Start planning today</div> </div>

        <Card className="m-20 mt-2 bg-yellow-50">
        {/*Middle Section*/}
        <div className="middle flex gap-6 items-center justify-center p-6 w-full ml-2 ">
            <div className="datecontainer text-3xl pr-20 font-semibold text-red-300">
                {day}
            </div>
        <Input type={'text'} placeholder={'type Title of task'} className="h-15 text-sm w-64 ml-15 mr-3 bg-blue-100 placeholder:text-center"/>
        <Input type={'text'} placeholder={'Detail of your task'} className="flex-1 h-15 text-sm bg-blue-100 placeholder:text-center"/>
        <Button className={'bg-green-600 h-15 p-4'}>add</Button>
        </div>

            {/*middle-Middle part*/}
            <div className="middlemiddle flex items-center justify-between p-6 pt-1 w-full ml-2 ">
                <div className="datecontainer text-3xl pr-20 font-semibold text-red-300">
                    {fullYearDetail}
                </div>
                <div className="searchbar">
                    <input type={'search'} placeholder={'search...'} className="h-7 w-30 text-sm border-4 border-y-yellow-300 rounded-full placeholder:text-center"></input>
                </div>
            </div>
            </Card>

        <Footer />
    </>
  )
}

export default App
