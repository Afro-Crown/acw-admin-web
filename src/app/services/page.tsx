"use client"
import Footer from "../../app/home/components/footer";
import Header from "../../app/home/components/header";
import { CaretRight, Dot } from "@phosphor-icons/react";
import Link from "next/link";
import RegistrationCard from "./components/registration-service-card";
import { useState } from "react";
import RegisterServiceModal from "./components/register-service-modal";


const ServicesScreen = () => {

  const [showModalRegister, setShowModalRegister] = useState<boolean>(false);

  function handleRegister() {
    setShowModalRegister(true)
  };

  return ( 
    <main className="h-screen w-full">
      <Header />
        <section className="h-full w-full bg-slate-50 flex flex-col justify-center items-center p-4">
          <div className="w-full md:w-[984px] lg:w-[984px] xl:w-[984px] flex-col md:flex-row lg:flex xl:flex md:justify-between lg:justify-between xl:justify-between">
            <div className="text-black h-10 text-xs flex flex-row items-center pl-4">
                <span>Início</span>
                <Dot size={40} />
                <Link href={'../home'}><span>Agendamentos</span></Link>
                <Dot size={40} />
                <Link href={'../services'}><span>Serviços</span></Link>
            </div>
            <div className="flex items-center">
              <button onClick={handleRegister} className="rounded-3xl bg-[#F67F57] w-48 text-sm font-semibold flex items-center justify-center gap-2 p-4">Adicionar serviço<CaretRight size={14} color="#FFFF" weight="bold" /></button> 
            </div>  
          </div>
          <main className="w-full md:w-[984px] lg:w-[984px] xl:w-[984px] h-screen flex-col text-black">
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg mt-8">Cortes</h2>
              <RegistrationCard />
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="font-semibold text-lg mt-8">Tinturas</h2>
              <RegistrationCard />
            </div>
          </main>
        </section>
      <Footer />
      {showModalRegister && (
          <RegisterServiceModal closeModal={() => setShowModalRegister(false)} />
        )}
    </main>
   );
}
 
export default ServicesScreen;