import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
function Footer() {
    return (
        <>
            <div className=" flex w-full justify-between items-center bg-pink-200 gap-2 bottom-0 left-0 fixed p-7">
                <div className="bottomleft border-2 rounded-full p-2 border-black"><FcTodoList /></div>
                <div className="centerContainer p-2">&copy; 2026 Sukhdeep Singh. All Rights Reserved. </div>
                <div className="right flex gap-2">
                <div className="bottomright border-2 rounded-full p-2 border-black "><FaFacebookF /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black "><FaLinkedinIn /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black "><FaXTwitter /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black "><FaGithub /></div>
                </div>
            </div>
        </>
    )

}

export default Footer
