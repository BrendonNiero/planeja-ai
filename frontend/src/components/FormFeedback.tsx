export default function FormFeedback(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white mb-3">Envie seu Feedback</h1>
            <p className="mb-16">Compartilhe suas ideias e ferramentas que gostaria de ver implementadas.</p>
            <form className="w-[800px] flex flex-col gap-5 mb-5">
                <div className="flex gap-5">
                    <div className="flex flex-col w-full">
                        <span className="text-white mb-3">Seu nome</span>
                        <input className="p-5 rounded-xl bg-[#1A1A1A]" type="text" placeholder="Digite aqui" />
                    </div>
                    <div className="flex flex-col w-full">
                        <span className="text-white mb-3">Onde encontrou a PlanejaAI</span>
                        <input className="p-5 rounded-xl bg-[#1A1A1A]" type="text" placeholder="Digite aqui" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-white mb-3">Envie sua Mensagem</span>
                    <textarea className="overflow-y-auto resize-none p-5 rounded-xl h-64 bg-[#1A1A1A]" 
                    placeholder="Envie suas ideias de soluções" />
                </div>
                <button className="w-full bg-white text-deep-space rounded-xl p-5" type="submit">Envia Mensagem</button>
            </form>
            <p>Suas sugestões serão consideradas no desenvolvimento da <span className="text-white">PlanejaAI</span></p>
        </div>
    )
}