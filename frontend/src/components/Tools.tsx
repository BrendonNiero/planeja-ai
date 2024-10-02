export default function Tools(){
    return(
        <section className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-8xl font-extrabold w-[1400px] text-center mb-32">Ferramentas mais utilizadas por educadores</h1>
            <div>
                <div className="bg-[#262133] border border-[726C6C] h-[250px] w-[300px] rounded-xl flex flex-col items-center">
                    <img className="w-40" src="/gamma.png" alt="gamma"/>
                    <h3 className="text-2xl font-extrabold">Gamma.app</h3>
                    <p className="text-[#A6A2A2]">Crie slides com IA</p>
                </div>
            </div>
        </section>
    )
}