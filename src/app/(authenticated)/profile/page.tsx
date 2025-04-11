"use client";

import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import Navigation from "@molecules/Navigation/navigation";
import ProfileBG from "@molecules/ProfileBG/profileBG";
import { useState } from "react";

export default function ProfilePage() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <main>
      <div className="flex w-[61rem] items-center gap-2 justify-self-center text-sm font-light">
        <Navigation />
        <div className={`border-black border-opacity-20 flex h-10 w-[12rem] items-center justify-center rounded-full bg-white shadow-md ${ 
          isToggled ? "w-[12rem]" : " w-[15rem]" }`}>
          <div
            onClick={() => setIsToggled(!isToggled)}
            className="cursor-pointer relative inline-block -start-2 w-10 h-6"
          >
            <div
              className={`absolute top-0 left-0 w-full h-full rounded-full transition-colors duration-300 ${
                isToggled ? "bg-[#27AE60]" : "bg-[#810000]"
              }`}
            />
            <div
              className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isToggled ? "translate-x-5" : ""
              }`}
            />
          </div>
          <p className="font-medium opacity-50 ">
           { isToggled ? "Salão aberto" : "Salão indisponível" }
          </p>
        </div>
      </div>
      <ProfileBG isEditable={true} />
      <div className="mt-16 flex max-w-6xl justify-self-center">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}