"use client";

import Image from "next/image";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ChangeBgUser from "../../../../public/change-bg-user.svg";
import { Pencil } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileBGProps {
  isEditable: boolean;
}

export default function ProfileBG({ isEditable }: ProfileBGProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <div className="py-10 flex gap-2 items-center font-light text-sm w-[61rem]">
        <Link href="/profile">
          <p className={`cursor-pointer ${pathname === "/profile" ? "underline" : ""}`}>Perfil</p>
        </Link>
        <span className="inline-block w-1 h-1 bg-black rounded-full" />
        <Link href="/profile/agendamento">
          <p className={`cursor-pointer ${pathname === "/profile/agendamento" ? "underline" : ""}`}>Agendamentos</p>
        </Link>
        <span className="inline-block w-1 h-1 bg-black rounded-full" />
        <Link href="/profile/servicos">
          <p className={`cursor-pointer ${pathname === "/profile/servicos" ? "underline" : ""}`}>Serviços</p>
        </Link>
      </div>
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