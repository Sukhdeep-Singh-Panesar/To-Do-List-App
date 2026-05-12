import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {useState, type SetStateAction} from "react";
import { IoMdAdd } from "react-icons/io";

function App() {
    const today: Date = new Date();

    const day = today.toLocaleString("en-US", {
        weekday: "long",
    });

    const fullYearDetail: string = today.toLocaleString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    type Todo = {
        id: number;
      title: string;
      detail: string;
    }

    const[addTitle, setAddTitle] = useState<string>("");
    const[addDetail, setAddDetail] = useState<string>("");
    const[todo, setTodo] = useState<Todo[]>([]);
    const[edit, setEdit] = useState<number | null>(null);

    const handleAdd = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAddTitle(e.target.value);
    };
    const handleAddDetail = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAddDetail(e.target.value);
    }

    const handleDelete = (id:number) => {
        setTodo(todo.filter(item=> item.id !== id))
    }
    const handleEdit = (item: Todo) => {
        setAddTitle(item.title);
        setAddDetail(item.detail)
        setEdit(item.id)
    }

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
        <Input value={addTitle} onChange={handleAdd} type={'text'} placeholder={'type Title of task'} className="h-15 text-sm w-64 ml-15 mr-3 bg-blue-100 placeholder:text-center"/>
        <Input  value={addDetail} onChange={handleAddDetail} type={'text'} placeholder={'Detail of your task'} className="flex-1 h-15 text-sm bg-blue-100 placeholder:text-center"/>


        <Button className={'bg-green-600 h-15 w-15 p-4 cursor-pointer'} onClick={()=> {

            if(edit) {
               setTodo(
                   todo.map( item => {
                           if (item.id === edit) {
                               return (
                                   {...item, title: addTitle, detail: addDetail}
                               )
                           } else {
                               return item
                           }
                       }
                   )
               )


            }
            else{
                setTodo([{
                    title: addTitle,
                    id: Date.now(),
                    detail: addDetail,
                }, ...todo],);
                setAddTitle("")
                setAddDetail("")
            }

        }}>
            <IoMdAdd /> </Button>

        </div>

            {/*middle-Middle part*/}
            <div className="middlemiddle flex items-center justify-between p-6 pt-1 w-full ml-2 ">
                <div className="datecontainer text-3xl pr-20 font-semibold text-red-300">
                    {fullYearDetail}
                </div>
                {/*<div className="searchbar">*/}
                {/*    <input type={'search'} placeholder={'search...'} className="h-7 w-30 text-sm border-4 border-y-yellow-300 rounded-full placeholder:text-center"></input>*/}
                {/*</div>*/}
            </div>

            <div className="flex p-6 pt-1 w-full ml-2 gap-25">

            <div className=" flex flex-col mr-6">
                <Calendar
                    mode="single"
                    className="rounded-lg border border-collapse"
                />
                </div>

                {/*Todo List Print*/}

                <div className=" flex-1">

                <ul className="flex flex-wrap gap-4 gap-x-16">

                    {todo.map(item =>(
                     <li key={item.id} className="w-90 mb-4">
                         <Card className="flex flex-col w-90 p-3 h-25 gap-2 ">
                        <div className="edit flex justify-between items-center">
                             <span> Title: {item.title} </span>
                             <Button className="cursor-pointer" onClick={ ()=> {
                                     handleEdit(item);
                                 }
                             }>Edit</Button>
                        </div>
                             <div className="edit flex  justify-between items-center">
                         <span>Detail: {item.detail}</span>
                             <Button  className="cursor-pointer" onClick={()=> handleDelete(item.id)}>Delete</Button>
                                 </div>
                         </Card>
                        </li>
                    ))}

                </ul>

            </div>
                </div>

            </Card>


        <Footer />
    </>
  )
}

export default App
