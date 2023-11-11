"use client"

import Footer from "@/app/home/components/footer";
import Header from "@/app/home/components/header";
import { CaretRight, Dot } from "@phosphor-icons/react";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";

const ServicesScreen = () => {
  return ( 
    <main className="h-screen w-full">
      <Header />
        <section className="h-full w-full bg-slate-50 flex flex-col justify-center items-center p-4">
          <div className="w-[984px] h-[10%] flex justify-between">
            <div className="text-black text-xs flex flex-row items-center h-full pl-4">
                <span>Início</span>
                <Dot size={40} />
                <Link href={'../home'}><span>Agendamentos</span></Link>
                <Dot size={40} />
                <Link href={'../services'}><span>Serviços</span></Link>
            </div>
            <div className="h-full flex items-center">
              <button className="rounded-3xl bg-[#F67F57] text-sm font-semibold flex items-center justify-center gap-2 p-4">Adicionar serviço<CaretRight size={14} color="#FFFF" weight="bold" /></button> 
            </div>  
          </div>
          <main className="w-[984px] h-full text-black">
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg mt-8">Cortes</h2>
              <ServiceCard />
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="font-semibold text-lg mt-8">Tinturas</h2>
              <ServiceCard />
            </div>
          </main>
        </section>
      <Footer />
    </main>
   );
}
 
export default ServicesScreen;