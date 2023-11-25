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
import ServiceCard from "./components/Tabs/ListNext/service-card";
import BreadCrumb from "@/components/Breadcrumb";
import Tabs from "./components/Tabs";
import Navbar from "@/components/Navbar";


const HomeScreen = () => {
  
  return ( 
      <main className="w-full bg-slate-50 flex flex-col items-center">
        <Navbar />
        <div className="w-[90%] max-w-[984px] h-full flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-6 px-3 flex-wrap mt-3 ">
              <BreadCrumb 
                route={[
                  {
                    label: 'Início',
                    path: '../home'
                  },
                  {
                    label: 'Agendamentos',
                  }
                ]}
              />

              <Image alt="Tag de cadastro e análise" src={analiseTag} />
            </div>
            <ProfileCover />
            <Tabs />
          </div>
        <Footer />
      </main>
   );
}
 
export default HomeScreen;