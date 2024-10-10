import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";

export default function ChatPage(){
    return(
        <main className="bg-header-chat">
            <Navbar />
            <Chat />
        </main>
    )
}