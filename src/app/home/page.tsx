"use client"
import { Dot, MapPin } from "@phosphor-icons/react";
import Footer from "./components/footer";
import Header from "./components/header";
import analiseTag from "../../../public/cadastroemanalise-tag.svg"
import profileBg from "../../../public/profile-bg.svg"
import userImage from "../../../public/user-profile.svg"
import Image from "next/image";


const HomeScreen = () => {
  return ( 
      <main className="h-screen w-full bg-white">
        <Header />
          <section className="h-full w-full bg-slate-50 flex justify-center">
            <div className="w-[984px] h-full">
              <div className="h-[15%] flex flex-row justify-between">
                <div className="text-black flex flex-row items-center h-full pl-4">
                  <span>Início</span>
                  <Dot size={40} />
                  <span>Agendamentos</span>
                </div>
                <div className="h-full flex items-center">
                  <Image alt="Cadastro em análise" src={analiseTag} />
                </div>
              </div>
              <main>
                <div className="w-full pb-8">
                  <Image className="absolute lg:left-[620px] lg:top-[280px]" alt="imagem do perfil do salão" src={userImage} />
                  <Image alt="Imagem de fundo do perfil" src={profileBg} />
                </div>
                <div className="text-black w-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold">Dellas & Delles Cabeleireiros</h2>
                  <h4 className="flex flex-row text-md items-center gap-2"><MapPin size={16} color="#A21A1A" weight="fill" />Av. Ovídio Poletti, 210, Campinas/SP</h4>
                </div>
              </main>
            </div>
          </section>
        <Footer />
      </main>
   );
}
 
export default HomeScreen;