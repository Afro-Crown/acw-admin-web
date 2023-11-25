"use client"
import Footer from "./components/footer";
import analiseTag from "../../../public/cadastroemanalise-tag.svg";
import Image from "next/image";
import ProfileCover from "./components/profile-cover";
import BreadCrumb from "../../components/Breadcrumb";
import Tabs from "./components/Tabs";
import Navbar from "../../components/Navbar";


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