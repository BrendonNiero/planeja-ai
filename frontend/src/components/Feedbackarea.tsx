import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import FormFeedback from "./FormFeedback";

export default function FeedbackArea(){
    return(
        <section className="h-screen p-10 flex items-center text-[#909090]">
            <div className="w-[50%] h-full p-5">
                <div className="bg-gradient-feedback h-full w-full rounded-[3rem] flex flex-col items-center justify-end">
                    <Link href={"https://github.com/BrendonNiero/planeja-ai"} className="flex items-center">
                        <img className="h-10 w-10" src="/logo-white.png" />
                        <span className="text-white font-bold text-3xl">PlanejaAI</span>
                    </Link>
                    <h1 className="text-4xl text-white mb-3">Encontre nas Redes sociais</h1>
                    <p className="mb-5">O projeto tem seu código fonte está aberto para contribuições</p>
                    <div className="flex flex-col gap-5">
                        <button className="bg-[#232323] transition ease-linear hover:bg-white hover:text-dark-obsidian 
                        flex items-center gap-5 p-5 rounded-xl">
                            <FaGithub className="text-5xl" />
                            <span className="text-xl">Github /BrendonNiero</span>
                        </button>
                        <button className="bg-[#232323] transition ease-linear hover:bg-white hover:text-dark-obsidian 
                        flex items-center gap-5 p-5 rounded-xl">
                            <TiSocialLinkedin className="text-5xl" />
                            <span className="text-xl">Linkedin /brendon-berzins</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full p-5 flex items-center justify-center">
                <FormFeedback />
            </div>
        </section>
    )
}