"use client"

import { IoIosAddCircle } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPenRuler } from "react-icons/fa6";
import { FaAppleAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaLock } from "react-icons/fa";

import { useEffect, useState } from "react";
type Message = {
  id: number;
  text: string;
}

export default function Chat() {
  const [suggestions, setSuggestions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [menssages, setMenssages] = useState<Message[]>([]);
  const [iaMenssages, setIaMenssages] = useState<Message[]>([]);
  const [showMessageIa, setShowMessageIa] = useState(false);

  const handleMenssageSend = () => {
    if (inputValue.trim() === "") return;

    setSuggestions(false);

    const newMenssage = {
      id: menssages.length + 1,
      text: inputValue
    }

    setMenssages((prevMessages) => [...prevMessages, newMenssage]);
    setIaMenssages((prevMessages) => [...prevMessages, newMenssage]);
    setInputValue("");

    setTimeout(() => {
      setShowMessageIa(true);
    }, 3000);
  };

  useEffect(() => {
    if (menssages.length > 0) {
      setShowMessageIa(false);
      setTimeout(() => {
        setShowMessageIa(true);
      }, 3000);
    }
  }, [menssages]);

  const newChat = () => {
    setSuggestions(true);
    setMenssages([]);
    setIaMenssages([]);
    setShowMessageIa(false);

    setTimeout(() => {
      setShowMessageIa(true);
    }, 3000);
  }

  const currentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const sendSuggestionMenssage = (msg:string) => {
    setSuggestions(false);

    const newMenssage = {
      id: menssages.length + 1,
      text: msg
    }

    setMenssages((prevMessages) => [...prevMessages, newMenssage]);
    setIaMenssages((prevMessages) => [...prevMessages, newMenssage]);
    setInputValue("");
  }

  const msg1card = `Como posso ensinar resolução de equações de 1º grau de maneira simples?`
  const msg2card = `Quais atividades posso usar para ensinar gramática de forma interativa?`
  const msg3card = `Sugira um experimento simples para ensinar as leis de Newton.`
  const msg4card = `Como posso explicar o conceito de gravidade de forma prática?`

    return(
        <section className="h-screen bg-white px-20 relative bottom-48 left-0 text-foggy">
        <div className="bg-chat w-full h-[850px] rounded-3xl  shadow-obsidian p-10">
          <div className="flex items-center justify-between">
            <button className="bg-coal border p-3 rounded-2xl border-foggy text-md font-bold">Exatas</button>
            <img className="h-20 w-20" src="/logo-gray.png" />
            <button onClick={newChat} className={`flex items-center gap-2 text-md hover:border-white hover:text-white 
              transition ease-linear font-bold bg-[#6825f1] text-cloud border-cloud border px-5 py-2 
              rounded-2xl`}>
              <IoIosAddCircle />
              <span>Novo</span>
            </button>
          </div>
          {
          suggestions ?
            <div className="h-[80%] w-full mb-5 flex items-center justify-center gap-5">
              <div onClick={() => sendSuggestionMenssage(msg1card)} className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <RiDiscountPercentFill className="text-2xl text-[#76d0eb]" />
                <p className="text-2xl font-semibold">{msg1card}</p>
              </div>
              <div onClick={() => sendSuggestionMenssage(msg2card)} className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <FaPenRuler className="text-2xl text-[#e2c541]" />
                <p className="text-2xl font-semibold">{msg2card}</p>
              </div>
              <div onClick={() => sendSuggestionMenssage(msg3card)} className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <FaAppleAlt className="text-2xl text-[#ed6262]" />
                <p className="text-2xl font-semibold">{msg3card}</p>
              </div>
              <div onClick={() => sendSuggestionMenssage(msg4card)} className="border border-foggy p-5 rounded-2xl w-[320px] h-[220px] hover:bg-graphite cursor-pointer">
                <BiWorld className="text-2xl text-[#76d0eb]" />
                <p className="text-2xl font-semibold">{msg4card}</p>
              </div>
            </div> :
            <div className="h-[80%] w-full mb-5 flex flex-col gap-5 items-end justify-end overflow-hidden">
              {
                menssages.map((msg) => (
                  <div className="w-full">
                    <div className="flex flex-col items-end justify-end w-full">
                      <span>{currentTime()}</span>
                      <span className="send-menssage text-cloud bg-vivid p-5 rounded-md max-w-[800px]">{msg.text}</span>
                    </div>
                    {
                      showMessageIa ?
                      <div className="flex flex-col items-start justify-start w-full">
                      <span>{currentTime()}</span>
                      <span key={msg.id} className="send-menssage text-cloud bg-graphite p-5 rounded-md max-w-[800px]">
                        Desculpe, o nosso modelo de IA ainda está em treinamento.
                      </span>
                      </div>
                      :
                      <div className="flex flex-col items-start justify-start w-full">
                      <span>{currentTime()}</span>
                      <span key={msg.id} className="send-menssage text-cloud bg-graphite p-5 rounded-md max-w-[800px]">
                        <BiDotsHorizontalRounded className="text-2xl animate-pulse"/>
                      </span>
                      </div>
                    }
                  </div>
                ))
              }
            </div>
          }
          <div className="flex gap-5 items-center justify-between">
            {
              menssages.length > 0 ?
              <input 
                value={inputValue}
                className={`bg-graphite border border-foggy p-3 w-full rounded-md
               focus:outline-[#ed6262] outline-none focus:border-none`}
                type="text" placeholder="Digite seu texto aqui" />
              :
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleMenssageSend()}
                className={`bg-graphite border border-foggy p-3 w-full rounded-md
               focus:outline-vivid outline-none focus:border-none`}
                type="text" placeholder="Digite seu texto aqui" />
            }
              {
                menssages.length > 0 ?
                <button className="bg-vivid p-3 rounded-md">
                    <FaLock className="text-white text-2xl"/>
                </button>
                : 
                <button onClick={handleMenssageSend} className="bg-vivid p-3 rounded-md">
                  <IoIosSend className="text-white text-2xl"/>
                </button>
              }
          </div>
        </div>
      </section>
    )
}