import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar(){
    return(
      <>
        <nav className="w-full absolute top-0 left-0 hidden xl:flex items-center justify-between px-20 py-5">
            <Link href={"https://github.com/BrendonNiero/planeja-ai"} className="flex items-center">
              <img className="h-20 w-20" src="/logo-white.png" />
              <span className="text-white font-bold text-5xl">PlanejaAI</span>
            </Link>
            <div className="flex items-center gap-20 text-xl">
              <Link href={"/"}>
                <span>Início</span>
              </Link>
              <Link href={"/chat"}>
                <span>Chat</span>
              </Link>
              <Link href={"/feedback"}>
                <span>Feedback</span>
              </Link>
            </div>
            <Link className="flex items-center gap-5 text-xl border-white text-white border rounded-full py-3 px-7" href={"https://www.instagram.com/brendon_berzins/"}>
              <span>@brendon_berzins</span>
              <MdOutlineArrowOutward />
            </Link>
      </nav>
      <nav className="flex xl:hidden w-full absolute top-0 left-0 items-center justify-between p-5 sm:p-10 md:px-20 py-5">
        <Link href={"https://github.com/BrendonNiero/planeja-ai"} className="flex items-center">
          <img className="h-10 sm:h-16 w-10 sm:w-16" src="/logo-white.png" />
          <span className="text-white font-bold text-3xl sm:text-4xl">PlanejaAI</span>
        </Link>
        <button>
          <HiMenuAlt3 className="text-white text-4xl" />
        </button>
      </nav>
    </>
    )
}