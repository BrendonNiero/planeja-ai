import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/HeaderHome";
import Tools from "@/components/Tools";
import Feedback from "@/components/Feedback";

export default function Home(){
  return(
    <main className="text-cloud bg-dark-obsidian">
      <Navbar />
      <HeaderHome />
      <Chat />
      <Tools />
      <Feedback />
    </main>
  )
}