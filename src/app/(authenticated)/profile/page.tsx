"use client";

import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import Navigation from "@molecules/Navigation/navigation";
import ProfileBG from "@molecules/ProfileBG/profileBG";

export default function ProfilePage() {
  return (
    <main>
      <div className="flex-start flex w-[61rem] gap-2 justify-self-center text-sm font-light">
        <Navigation />
      </div>
      <ProfileBG isEditable={true} />
      <div className="mt-16 flex max-w-6xl justify-self-center">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}
