import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function Feedback(){
    return(
        <section className="h-[80vh] w-full flex flex-col items-center text-center justify-center">
            <h1 className="text-8xl font-extrabold text-center mb-10">
                Envie seu Feedback
            </h1>
            <p className="w-[800px] text-[#A6A2A2] text-xl font-semibold mb-10">Compartilhe suas ideias! Me diga quais ferramentas você gostaria de 
                ver no PlanejaAI para facilitar ainda mais o planejamento das suas 
                aulas e melhorar sua experiência.</p>
                <div className="flex gap-10">
                    <Link className="bg-white  text-dark-obsidian px-14 py-3 rounded-full" href={"/feedback"}>Enviar Feedback</Link>
                    <Link className="flex items-center gap-3" href={"https://www.linkedin.com/in/brendon-berzins-45815b268/"}>
                        <span>Linkedin</span>
                        <FaChevronRight />
                    </Link>
                </div>
        </section>
    )
}