"use client";

import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import ProfileBG from "@molecules/ProfileBG/profileBG";

export default function ProfilePage() {
  return (
    <main className="w-full px-4 md:px-6 lg:px-8">
      <ProfileBG isEditable={true} />
      <div className="mt-8 md:mt-12 lg:mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            <ProfessionalList />
            <AvaliationSection />
          </div>
        </div>
      </div>
    </main>
  );
}
