import Link from "next/link";

export default function Tools(){
    return(
        <section className="flex flex-col items-center justify-center h-[80vh] w-full">
            <h1 className="text-8xl font-extrabold w-[1400px] text-center mb-32">Ferramentas mais utilizadas por educadores</h1>
            <div className="flex items-center gap-5">
                <Link href={"https://gamma.app/"} className="bg-[#131226] scale-[0.9] hover:border-2 hover:border-vivid hover:scale-[1] transition ease-linear border border-[#373741] h-[250px] w-[300px] rounded-xl flex flex-col items-center p-5">
                    <img className="w-28 mb-5" src="/gamma.png" alt="gamma"/>
                    <h3 className="text-2xl font-extrabold">Gamma.app</h3>
                    <p className="text-[#A6A2A2]">Crie slides com IA</p>
                </Link>
                <Link href={"https://kahoot.com/"} className="bg-[#131226] scale-[0.9] hover:border-2 hover:border-vivid hover:scale-[1] transition ease-linear border border-[#373741] h-[250px] w-[300px] rounded-xl flex flex-col items-center p-5">
                    <img className="w-28 mb-5" src="/kahoot.png" alt="kahoot"/>
                    <h3 className="text-2xl font-extrabold">Kahoot</h3>
                    <p className="text-[#A6A2A2]">Quizzis e Jogos</p>
                </Link>
                <Link href={"https://nearpod.com/"} className="bg-[#131226] scale-[0.9] hover:border-2 hover:border-vivid hover:scale-[1] transition ease-linear border border-[#373741] h-[250px] w-[300px] rounded-xl flex flex-col items-center p-5">
                    <img className="w-28 mb-5" src="/nearpod.png" alt="noearpod"/>
                    <h3 className="text-2xl font-extrabold">Nearpod</h3>
                    <p className="text-[#A6A2A2]">Apresentações</p>
                </Link>
            </div>
        </section>
    )
}