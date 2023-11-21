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
      <main className="h-screen w-screen bg-white">
        <Header />
          <section className="h-full w-full bg-slate-50 flex justify-center">
            <div className="w-screen md:w-[984px] lg:w-[984px] xl:w-[984px] 2xl:w-[984px] h-full">
              <div className="h-[15%] flex flex-row justify-between gap-4 md:px-16 md:text-xs w-screen md:max-w-[984px] lg:max-w-[984px] xl:max-w-[984px] 2xl:max-w-[984px]">
                <div className="text-black text-xs md:text-base lg:text-base flex pl-16 md:pl-2 lg:pl-2 flex-row items-center h-full lg:px-2">
                  <Link href={'../home'}><span>Início</span></Link>
                  <Dot size={40} />
                  <span>Agendamentos</span>
                </div>
                <div className="h-full w-auto flex items-center pr-2 md:pr-2 lg:pr-2">
                  <Image alt="Cadastro em análise" src={analiseTag} />
                </div>
              </div>
              <div className="w-full">
                <ProfileCover />
              </div>
              <div className="w-full">
                <nav className="text-black font-semibold flex justify-between mt-8 px-8 md:px-0 lg:px-0">
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