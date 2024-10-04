import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function NewHeaderHome(){
    return(
        <section className="h-[130vh] bg-[#060117] mt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold w-[900px] leading-[5rem] text-center mb-5">
                    <span className="bg-span-short px-4">Planeje</span> aulas incríveis em minutos com o <span className="bg-span px-4">PlanejaAI</span>
                </h1>
                    <p className="text-[#A6A2A2] text-xl w-[700px] mb-10 text-center">Precisa de ideias para suas aulas? Nosso Chat IA cria sugestões personalizadas para você em tempo real. 
                        Experimente agora e economize tempo no planejamento!</p>
                    <div className="flex gap-5 items-center">
                        <button className="bg-[#6238FE] px-10 py-3 rounded-md font-semibold">Comece Agora</button>
                        <Link className="flex items-center gap-3" href={"https://github.com/BrendonNiero/planeja-ai"}>
                            <span>GitHub</span>
                            <FaChevronRight />
                        </Link>
                    </div>
            </div>
            <div className="bg-new-header-home h-screen">
            </div>
        </section>
    )
}