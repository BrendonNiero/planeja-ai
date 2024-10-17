import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function FeedbackForm(){
    return(
        <section className="pt-40 h-screen flex items-center">
            <div className="w-full h-full p-10">
                <div className="bg-feedback-gradient w-full h-full rounded-3xl flex items-end justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <Link href={"https://github.com/BrendonNiero/planeja-ai"} className="flex items-center">
                          <img className="h-10 w-10" src="/logo-white.png" />
                          <span className="text-white font-bold text-3xl">PlanejaAI</span>
                        </Link>
                        <h1 className="text-5xl font-semibold">Envie seu Feedback</h1>
                        <p className="text-xl text-foggy">Colabore no desenvolvimento do PlanejaAI</p>
                        <div className="w-full mt-5 flex flex-col gap-5">
                            <Link href={"/"} className="w-full">
                                <div className="flex items-center justify-between w-full p-5 bg-[#232323] rounded-md text-white
                                hover:text-dark-obsidian hover:bg-white transition ease-in-out">
                                    <FaGithub className="text-4xl"/>
                                    <p className="text-xl">Github</p>
                                    <FaChevronRight className="text-xl"/>
                                </div>
                            </Link>
                            <Link href={"/"} className="w-full">
                                <div className="flex items-center justify-between w-full p-5 bg-[#232323] rounded-md text-white
                                hover:text-dark-obsidian hover:bg-white transition ease-in-out">
                                    <FaLinkedinIn className="text-4xl"/>
                                    <p className="text-xl">Linkedin</p>
                                    <FaChevronRight className="text-xl"/>
                                </div>
                            </Link>
                            <Link href={"/"} className="w-full">
                                <div className="flex items-center justify-between w-full p-5 bg-[#232323] rounded-md text-white
                                hover:text-dark-obsidian hover:bg-white transition ease-in-out">
                                    <FaInstagramSquare className="text-4xl"/>
                                    <p className="text-xl">Instagram</p>
                                    <FaChevronRight className="text-xl"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full p-10 flex flex-col items-center">
                <h1 className="text-5xl font-semibold mb-5">Enviar Mensagem</h1>
                <p className="text-foggy mb-20">Envie suas ideias de ferramentas para o PlanejaAI</p>
                <form className="w-[600px] flex flex-col gap-5">
                    <div className="w-full flex gap-5">
                        <div className="flex flex-col gap-3 w-full">
                            <span className="text-foggy">Nome:</span>
                            <input className="w-full p-5 rounded-md" type="text" placeholder="Digite seu nome" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <span className="text-foggy">Assunto:</span>
                            <input className="w-full p-5 rounded-md" type="text" placeholder="Digite o assunto" />
                        </div>
                    </div>
                    <textarea  className="h-[300px] p-5 rounded-md" placeholder="Envie sua menssagem" />
                </form>
            </div>
        </section>
    )
}