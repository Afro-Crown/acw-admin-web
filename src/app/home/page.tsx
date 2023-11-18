"use client"
import { Dot, MapPin } from "@phosphor-icons/react";
import Footer from "./components/footer";
import Header from "./components/header";
import analiseTag from "../../../public/cadastroemanalise-tag.svg";
import profileBg from "../../../public/profile-bg.svg";
import scheduleIcon from "../../../public/schedule-icon.svg";
import userImage from "../../../public/user-profile.svg";
import Image from "next/image";
import NextList from "./components/NextList";
import HistoryList from "./components/HistoryList";
import CanceledList from "./components/CanceledList";
import { useState } from "react";
import Link from "next/link";
import ProfileCover from "./components/profile-cover";
import ServiceCard from "../home/components/service-card";


const HomeScreen = () => {
  const [tab, setTab] = useState<'NEXT' | 'HISTORY' | 'CANCELED'>('NEXT')
  return ( 
      <main className="h-screen w-full bg-white">
        <Header />
          <section className="h-full w-full bg-slate-50 flex justify-center">
            <div className="w-[984px] h-full">
              <div className="h-[15%] flex flex-row justify-between md:px-16 md:text-xs ">
                <div className="text-black flex flex-row items-center h-full lg:px-4">
                  <span>Início</span>
                  <Dot size={40} />
                  <span>Agendamentos</span>
                  <Dot size={40} />
                  <Link href={'../services'}><span>Serviços</span></Link>
                  <Dot size={40} />
                  <Link href={'../reviews'}><span>Avaliações</span></Link>
                </div>
                <div className="h-full flex items-center">
                  <Image alt="Cadastro em análise" src={analiseTag} />
                </div>
              </div>
              <div>
                <ProfileCover />
              </div>
              <div className="w-full">
                <nav className="text-black font-semibold flex justify-between mt-8">
                  <div onClick={() => setTab('NEXT')} className="flex flex-1 flex-row gap-2 justify-center">
                    <Image alt="Schedule icon" src={scheduleIcon}/>
                    <span>Próximos</span>
                  </div>
                  <div onClick={() => setTab('HISTORY')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span>Histórico</span>
                  </div>
                  <div onClick={() => setTab('CANCELED')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span>Cancelados</span>
                  </div>
                </nav>
                <div className=" p-10 text-black">
                  {
                    tab == 'NEXT' &&
                    <ServiceCard />
                  }
                  {
                    tab == 'HISTORY' &&
                    <HistoryList />
                  }
                  {
                    tab == 'CANCELED' &&
                    <CanceledList />
                  }
                </div>
              </div>
            </div>
          </section>
        <Footer />
      </main>
   );
}
 
export default HomeScreen;