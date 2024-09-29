"use client"

import { IoIosAddCircle } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPenRuler } from "react-icons/fa6";
import { FaAppleAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
}

export default function Chat(){
  const [suggestions, setSuggestions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [menssages, setMenssages] = useState<Message[]>([]);

  const handleMenssageSend = () => {
    if(inputValue.trim() === "") return;

    setSuggestions(false);

    const newMenssage = {
      id: menssages.length + 1,
      text: inputValue
    }

    setMenssages((prevMessages) => [...prevMessages, newMenssage]);
    setInputValue("");
  };


    return(
        <section className="h-screen px-20 relative bottom-48 left-0 text-foggy">
        <div className="bg-chat w-full h-[850px] rounded-3xl  shadow-obsidian p-10">
          <div className="flex items-center justify-between">
            <button className="bg-coal border p-3 rounded-2xl border-foggy text-md font-bold">Humanas</button>
            <img className="h-20 w-20" src="/logo-gray.png" />
            <button className={`flex items-center gap-2 text-md hover:border-white hover:text-white 
              transition ease-linear font-bold bg-[#6825f1] text-cloud border-cloud border px-5 py-2 
              rounded-2xl`}>
              <IoIosAddCircle />
              <span>Novo</span>
            </button>
          </div>
          {
          suggestions ?
            <div className="h-[80%] w-full mb-5 flex items-center justify-center gap-5">
              <div className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <RiDiscountPercentFill className="text-2xl text-[#76d0eb]" />
                <p className="text-2xl font-semibold">Como posso ensinar resolução de equações de 1º grau de maneira simples?</p>
              </div>
              <div className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <FaPenRuler className="text-2xl text-[#e2c541]" />
                <p className="text-2xl font-semibold">Quais atividades posso usar para ensinar gramática de forma interativa?</p>
              </div>
              <div className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <FaAppleAlt className="text-2xl text-[#ed6262]" />
                <p className="text-2xl font-semibold">Sugira um experimento simples para ensinar as leis de Newton.</p>
              </div>
              <div className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <BiWorld className="text-2xl text-[#76d0eb]" />
                <p className="text-2xl font-semibold">Como posso explicar o conceito de gravidade de forma prática?</p>
              </div>
            </div> :
            <div className="h-[80%] w-full mb-5 flex flex-col gap-5 items-end justify-end overflow-hidden">
              {
                menssages.map((msg) => (
                  <div className="flex flex-col items-end justify-end">
                    <span>22:39</span>
                    <span key={msg.id} className="text-cloud bg-vivid p-5 rounded-md">{msg.text}</span>
                  </div>
                ))
              }
            </div>
          }
          <div className="flex gap-5 items-center justify-between">
            <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleMenssageSend()}
            className={`bg-graphite border border-foggy p-3 w-full rounded-md
               focus:outline-vivid outline-none focus:border-none`}
                type="text" placeholder="Digite seu texto aqui" />
            <button onClick={handleMenssageSend} className="bg-vivid p-3 rounded-md">
              <IoIosSend className="text-white text-2xl"/>
            </button>
          </div>
        </div>
      </section>
    )
}