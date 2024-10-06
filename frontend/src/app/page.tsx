import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/HeaderHome";
import WhatYouCanDo from "@/components/WhatYouCanDo";
import About from "@/components/About";
import Feedback from "@/components/Feedback";

export default function Home(){
  return(
    <main className="text-cloud bg-[#01061a]">
      <Navbar />
      <HeaderHome />
      <WhatYouCanDo />
      <About />
      <Feedback />
    </main>
  )
}