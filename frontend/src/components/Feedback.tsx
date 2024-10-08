import { FaChevronRight } from "react-icons/fa6";

export default function Feedback(){
    return(
        <section className="bg-feedback h-[120vh] w-full flex flex-col items-center justify-center">
            <h1 className="text-6xl font-semibold mb-10">Envie Seu Feedback</h1>
            <div className="glass-white p-3 mb-10 ">
                <p className="text-cloud text-xl w-[750px] text-center bg-biuld-with-ai p-10 rounded-md">Compartilhe suas ideias! Me diga quais 
                    ferramentas você gostaria de ver no PlanejaAI para facilitar ainda mais o planejamento 
                    das suas aulas e melhorar sua experiência.</p>
            </div>
            <div className="flex items-center gap-5">
                <button className="bg-[#6138FB] text-white py-3 px-10 rounded-xl">Feedback</button>
                <button className="flex items-center gap-3 text-white">
                    <span>Github</span>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}