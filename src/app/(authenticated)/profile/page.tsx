"use client";

import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfileBG from "@molecules/ProfileBG/profileBG";
import Navigation from "@molecules/Navigation/navigation"

export default function ProfilePage() {
  return (
    <main>
      <div className="flex flex-start justify-self-center gap-2 font-light text-sm w-[61rem]">
        <Navigation />
      </div>
      <ProfileBG isEditable={true} />
      <div className="flex justify-self-center max-w-6xl mt-16">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}
