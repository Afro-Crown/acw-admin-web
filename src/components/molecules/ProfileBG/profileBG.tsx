"use client";

import Image from "next/image";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ChangeBgUser from "../../../../public/change-bg-user.svg";
import { Pencil } from "lucide-react";
import { MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

interface ProfileBGProps {
  isEditable: boolean;
}

export default function ProfileBG({ isEditable }: ProfileBGProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center relative gap-20">
        <Image src={ProfileBg} alt="ProfileBg" className="" />
        <Image src={UserProfile} alt="UserProfile" className="absolute top-16" />
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-extrabold text-3xl">Dellas & Delles Cabeleireiros</h1>
          <div className="flex items-center gap-2">
            <MapPin className="stroke-red-500" />
            <p className="text-xl">Av. Ovídio Poletti, 210, Campinas/SP</p>
            {isEditable && <Pencil className="cursor-pointer stroke-white fill-black stroke-1" />}
          </div>
        </div>
        {isEditable && (
          <>
            <Image src={ChangeUser} alt="ChangeUser" className="cursor-pointer absolute top-[4rem] right-[25rem]" />
            <Image src={ChangeBgUser} alt="ChangeBgUser" className="cursor-pointer absolute left-[57rem] top-[9rem]" />
          </>
        )}
      </div>
    </div>
  );
}