import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/HeaderHome";
import Tools from "@/components/Tools";
import Feedback from "@/components/Feedback";

export default function Home(){
  return(
    <main className="text-cloud bg-[#060117]">
      <Navbar />
      <HeaderHome />
      <Tools />
      <Feedback />
    </main>
  )
}