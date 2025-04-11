"use client";

import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import Navigation from "@molecules/Navigation/navigation";
import ProfileBG from "@molecules/ProfileBG/profileBG";

export default function ProfilePage() {
  return (
    <main className="w-full px-4 md:px-6 lg:px-8">
      <div className="flex-start flex w-full max-w-[61rem] gap-2 justify-self-center text-sm font-light">
        <Navigation />
      </div>
      <ProfileBG isEditable={true} />
      <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row w-full max-w-6xl justify-self-center gap-8">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}
