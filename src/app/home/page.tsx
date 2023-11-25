"use client"
import Footer from "./components/footer";
import analiseTag from "../../../public/cadastroemanalise-tag.svg";
import Image from "next/image";
import ProfileCover from "./components/profile-cover";
import Navbar from "../../components/Navbar";
import ButtonInsert from "./components/ButtonInsert";
import List from "./components/List";


const HomeScreen = () => {
  return ( 
      <main className="w-full bg-slate-50 flex flex-col items-center">
        <Navbar />
        <div className="w-[90%] max-w-[984px] h-full flex flex-col items-center pb-16">
            <div className="w-full flex justify-end items-center mb-6 md:mb-0 px-3 flex-wrap mt-3 ">
              <Image alt="Tag de cadastro e análise" src={analiseTag} />
            </div>
            <ProfileCover />
            <div className="flex md:justify-end w-full mb-7 pt-6">
              <ButtonInsert />
            </div>
            <List />
          </div>
        <Footer />
      </main>
   );
}
 
export default HomeScreen;