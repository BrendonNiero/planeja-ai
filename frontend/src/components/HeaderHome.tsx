import { FaChevronRight } from "react-icons/fa6";

export default function NewHeaderHome(){
    return(
        <section className="bg-header-home h-[150vh] w-full text-cloud px-10">
            <div className="pt-40 flex flex-col xl:flex-row items-start justify-center">
                <h1 className="text-4xl text-start md:text-6xl w-full md:w-[600px] 
                xl:w-[800px] md:leading-[5rem] font-semibold mb-10">
                    Planeje aulas rapidamente com o 
                    <span className="bg-span px-8 py-1 md:px-5">PlanejaAI</span>
                </h1>
                <div className="w-full xl:w-[600px]">
                    <p className="text-xl mb-10">Precisa de ideias para suas aulas? Nosso Chat IA cria sugestões personalizadas para você em tempo real. 
                        Experimente agora e economize tempo no planejamento!</p>
                    <div className="flex items-center gap-5">
                        <button className="md:flex hidden bg-[#6138FB] text-white py-3 px-10 rounded-xl">Começar Agora</button>
                        <button className="md:flex hidden items-center gap-3 text-white">
                            <span>Código no Github</span>
                            <FaChevronRight />
                        </button>
                        <button className="flex md:hidden bg-[#6138FB] text-white py-3 px-10 rounded-xl">Começar</button>
                        <button className="flex md:hidden items-center gap-3 text-white">
                            <span>Github</span>
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