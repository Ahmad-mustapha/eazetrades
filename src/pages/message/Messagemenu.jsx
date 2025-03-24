import { Link } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";

export const Messagemenu = () => {
  return (
    <div className="flex flex-col gap-4 text-[#4F4F4F] absolute right-0 top-20 p-4 rounded-lg bg-white">
        <div className="flex items-center gap-2 text-[20px] font-[500]"><FaRegStar /><Link>View vendor profile</Link></div>
        <div className="flex items-center gap-2 text-[20px] font-[500]"><FaRegStar /><button>Delete conversation</button></div>
    </div>
  )
}
