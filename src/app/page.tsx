import { Julius_Sans_One } from "next/font/google";
import Footer from "./home/components/footer";
import acLogo from "../../public/logo-one.svg";
import mainImg from "../../public/main-img.svg";
import Link from "next/link";
import Image from "next/image";
import { Trirong } from "next/font/google";

const trirong = Trirong({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function Home() {
  return (
    <main
      className={`flex bg-[#FFEAD4] min-h-screen flex-col items-center`}
    >
      <header className="h-[104px] w-[60%] bg-[#FFEAD4] flex items-center justify-between ">
        <div className="flex w-1/4 items-center justify-center">
          <Image src={acLogo} alt="Afro Crown Logo" />
        </div>
        <div className="border border-b-0 h-0 w-[40%] border-[#A21A1A]"></div>
        <nav className="flex flex-row h-full gap-2 p-2">
          <ul className="text-[#A21A1A] flex flex-row h-full items-center gap-4">
            <Link href="#" className="hover:scale-105">
              <li className={trirong.className}>Sobre</li>
            </Link>
            <div className="h-[20%] w-0 border border-y-1 border-[#A21A1A]"></div>
            <li className={trirong.className}>Contatos</li>
            <div className="h-[20%] w-0 border border-y-1 border-[#A21A1A]"></div>
            <Link href={"/login"}><li className={`border border-[#A21A1A] ${trirong.className} py-2 px-3`}>Entrar</li></Link>
          </ul>
        </nav>
      </header>
      <div className="pb-3">
        <Image alt="Main Image" src={mainImg}/>
      </div>
      <Footer />
    </main>
  );
}
