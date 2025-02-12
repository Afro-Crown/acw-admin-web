import { MapPin, Pencil } from "lucide-react";
import Image from "next/image";

import AvaliationSection from "@/components/molecules/AvaliationSection/avaliationSection";
import ProfessionalList from "@/components/molecules/ProfessionalsList/professionalList";

import ChangeBgUser from "../../../../public/change-bg-user.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";

export default function ProfilePage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="m-10 flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <Image src={ProfileBg} alt="ProfileBg" className="" />
          <Image
            src={UserProfile}
            alt="UserProfile"
            className="absolute top-12"
          />
          <Image
            src={ChangeUser}
            alt="ChangeUser"
            className="relative bottom-32 left-16 cursor-pointer"
          />
          <Image
            src={ChangeBgUser}
            alt="ChangeBgUser"
            className="absolute bottom-4 right-2 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-extrabold">
            Dellas & Delles Cabeleireiros
          </h1>
          <div className="flex items-center gap-2">
            <MapPin className="stroke-red-500" />
            <p className="text-xl">Av. Ovídio Poletti, 210, Campinas/SP</p>
            <Pencil className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex max-w-5xl gap-5">
        <ProfessionalList />
        <AvaliationSection />
      </div>
    </main>
  );
}
