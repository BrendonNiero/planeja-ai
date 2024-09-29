import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/HeaderHome";

export default function Home(){
  return(
    <main className="text-cloud bg-dark-obsidian">
      <Navbar />
      <HeaderHome />
      <Chat />
    </main>
  )
}