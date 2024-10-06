import { FaChevronRight } from "react-icons/fa6";

export default function NewHeaderHome(){
    return(
        <section className="bg-header-home h-[150vh] w-full text-cloud">
            <div className="pt-40 flex items-start justify-center">
                <h1 className="text-6xl w-[800px] leading-[5rem] font-semibold">
                    Planeje aulas rapidamente com o 
                    <span className="bg-span px-5">PlanejaAI</span>
                </h1>
                <div className="w-[600px]">
                    <p className="text-xl mb-10">Precisa de ideias para suas aulas? Nosso Chat IA cria sugestões personalizadas para você em tempo real. 
                        Experimente agora e economize tempo no planejamento!</p>
                    <div className="flex items-center gap-5">
                        <button className="bg-[#6138FB] text-white py-3 px-10 rounded-xl">Começar Agora</button>
                        <button className="flex items-center gap-3 text-white">
                            <span>Código no Github</span>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="chat-img h-[1000px] ">
            </div>
        </section>
    )
}