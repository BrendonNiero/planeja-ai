import { BsStars } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

export default function WhatYouCanDo(){
    return(
        <section className="bg-features h-[150vh] w-full flex flex-col items-center justify-start">
            <span className="border border-x-foggy text-cloud py-3 px-10 rounded-full">Funcionalidades</span>
            <div className="flex flex-col gap-5 items-center justify-center text-center w-[700px] mb-40">
                <h1 className="text-6xl font-semibold mb-5">O que Você Pode Fazer com o PlanejaAI</h1>
                <p className="text-foggy text-xl">O PlanejaAI traz uma série de funcionalidades para facilitar o seu dia a dia, 
                    como transformar mensagens em áudio para uma experiência mais prática, gerar planos de aula detalhados, 
                    organizar ideias e muito mais. </p>
            </div>
            <div className="glass-white p-3 mb-20">
                <div className="flex flex-col bg-biuld-with-ai p-10 rounded-xl border border-foggy">
                    <div className="flex items-center justify-between text-xl text-white mb-5">
                        <span>Aproveite o máximo do PlanejaAI!</span>
                        <div className="flex items-center gap-3">
                            <BsStars className="text-[#f82a8d]"/>
                            <span className="text-ai-gradient">Gerar com IA</span>
                        </div>
                    </div>
                    <p>Explore nossas funcionalidades e veja como simplificamos suas tarefas.</p>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="glass-card card-features">
                    <MdKeyboardVoice  className="text-4xl mb-5"/>
                    <span className="text-xl text-white">Ouça suas Mensagens</span>
                    <p>Escute facilmente o conteúdo das mensagens e documentos, transformando 
                        texto em áudio para uma experiência mais prática.</p>
                </div>
                <div className="glass-card card-features">
                <FaCalendarCheck className="text-4xl mb-5"/>
                    <span className="text-xl text-white">Planejamento de Aulas</span>
                    <p>Crie planos de aula detalhados e personalizados com base em suas necessidades, 
                        economizando tempo e esforço.</p>
                </div>
                <div className="glass-card card-features">
                <FaPaintBrush className="text-4xl mb-5"/>
                    <span className="text-xl text-white">Respostas Formatadas</span>
                    <p>Receba respostas já formatadas e prontas para uso, facilitando a criação de 
                        conteúdo e documentos.</p>
                </div>
                <div className="glass-card card-features">
                <FaBrain className="text-4xl mb-5"/>
                    <span className="text-xl text-white">Organização de Ideias</span>
                    <p>Estruture suas ideias e pensamentos de forma visual, ajudando na organização 
                        e clareza de projetos e atividades.</p>
                </div>
                <div className="glass-card card-features">
                <FaBolt className="text-4xl mb-5"/>
                    <span className="text-xl text-white">Automatização de Tarefas</span>
                    <p>Automatize processos repetitivos para focar no que realmente importa, 
                        otimizando seu fluxo de trabalho.</p>
                </div>
            </div>
        </section>
    )
}