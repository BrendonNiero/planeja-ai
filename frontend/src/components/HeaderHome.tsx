import { BsTranslate } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { TbMath } from "react-icons/tb";

export default function HeaderHome(){
    return(
        <section className="header-home h-screen w-full flex flex-col items-center justify-center px-20">
            <h1 className="text-8xl font-extrabold w-[1400px] text-center mb-10">Planeje aulas incríveis em minutos com o 
              <span className="text-white"> Planeja</span>
              <span className="gradient-text">AI</span>
            </h1>
            <p className="text-4xl font-bold text-foggy mb-20">A inteligência artificial que facilita seu trabalho.</p>
            <div className="flex gap-10">
              <div className="card-category">
                <BsTranslate className="text-6xl text-white"/>
              </div>
              <div className="card-category">
                <TbMath className="text-6xl text-white"/>
              </div>
              <div className="card-category">
                <MdOutlineScience className="text-6xl text-white"/>
              </div>
            </div>
      </section>
    )
}