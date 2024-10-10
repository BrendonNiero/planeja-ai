import { FaChevronRight } from "react-icons/fa6";

export default function About(){
    return(
        <section className="bg-about h-screen w-full flex items-center gap-20">
            <div className="w-[50%] relative">
                <div className="glass-white p-3 w-[550px] ml-20">
                    <div className="bg-biuld-with-ai p-5">
                        <div className="flex items-center gap-5">
                            <div className="w-[3px] h-[30px] bg-vivid"></div>
                            <h2 className="text-vivid font-semibold text-4xl">O Que é o PlanejaAI?</h2>
                        </div>
                        <p>Uma ferramenta que facilita o planejamento de aulas com inteligência artificial.</p>
                    </div>
                </div>
                <div className="w-ful flex items-center justify-end p-5">
                    <img className="w-[700px] cursor-default" src="/timeline-planejaai.png" alt="timeline"/>
                </div>
                <div className="glass-white p-3 w-[550px] absolute top-[35rem] right-10">
                    <div className="bg-biuld-with-ai p-5">
                        <div className="flex items-center gap-5">
                            <div className="w-[3px] h-[30px] bg-vivid"></div>
                            <h2 className="text-vivid font-semibold text-4xl">Contribua com o PlanejaAI</h2>
                        </div>
                        <p>Professores e desenvolvedores podem ajudar a melhorar a plataforma.</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <h1 className="text-6xl font-semibold mb-5">A Origem do PlanejaAI</h1>
                <p className="text-xl text-foggy w-[630px] mb-5">O PlanejaAI é uma iniciativa voltada para a simplificação e 
                    otimização do planejamento de aulas para professores, 
                    utilizando inteligência artificial para agilizar processos 
                    como a criação de planos de aula, organização de ideias e 
                    automação de tarefas repetitivas.</p>
                <p className="text-xl text-foggy w-[630px] mb-10">O PlanejaAI foi desenvolvido pelo Engenheiro de 
                    Software <span className="text-cloud">Brendon Berzins</span>. A ferramenta é de código aberto 
                    e está disponível no GitHub para que desenvolvedores possam contribuir. Para os educadores, 
                    disponibilizamos uma área de <span className="text-cloud">Feedback</span> onde você pode compartilhar suas ideias e 
                    contribuir para o desenvolvimento de novas funcionalidades e melhorias na plataforma. </p>
                <div className="flex items-center gap-5">
                    <button className="bg-[#6138FB] text-white py-3 px-10 rounded-xl">Começar Agora</button>
                    <button className="flex items-center gap-3 text-white">
                        <span>Código no Github</span>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}