import Image from "next/image";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ChangeBgUser from "../../../../public/change-bg-user.svg";
import { MapPin } from "lucide-react";
import { Pencil } from "lucide-react";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";
import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";

export default function ProfilePage() {
  return (
    <main> 
      <div className="flex flex-col items-center m-10">
        <div className="flex flex-col items-center relative">
          <Image src={ProfileBg} alt="ProfileBg" className="" />
          <Image src={UserProfile} alt="UserProfile" className="absolute top-12" />
          <Image src={ChangeUser} alt="ChangeUser" className="cursor-pointer relative bottom-32 left-16" />
          <Image src={ChangeBgUser} alt="ChangeBgUser" className="cursor-pointer absolute right-2 bottom-4" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-extrabold text-3xl">Dellas & Delles Cabeleireiros</h1>
          <div className="flex items-center gap-2">
            <MapPin className="stroke-red-500" />
            <p className="text-xl">Av. Ovídio Poletti, 210, Campinas/SP</p>
            <Pencil className="cursor-pointer stroke-white fill-black stroke-1" />
          </div>
        </div>
      </div>
      <div className="flex mx-96">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
};