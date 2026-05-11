import logo from '../assets/Ellipse.svg'
function Navbar() {

    return (
        <>
            <nav className="bg-[#E4B9B9] w-full p-2 flex gap-6 m-2">
                <div className="logo font-island bg-[#F87777] py-2 px-2 border-2 border-solid rounded-full text-4xl shadow-[-]">TH</div>
                <h1 className={'font-island text-5xl  p-2'}>
                    Task Hub
                </h1>
                <div className="image ml-auto">
                <img src={logo} alt="logo" className="w-12 h-12 m-2"/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
