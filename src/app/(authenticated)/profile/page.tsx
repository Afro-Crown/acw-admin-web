import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfileBG from "@molecules/ProfileBG/profileBG";

export default function ProfilePage() {
  return (
    <main className=""> 
      <ProfileBG isEditable={true} />
      <div className="flex justify-self-center max-w-6xl mt-16">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}
