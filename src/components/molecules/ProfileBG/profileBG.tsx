"use client";

import { useState } from "react";

import { Pencil, MapPin } from "lucide-react";
import Image from "next/image";

import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";

import ChangeBgUser from "../../../../public/change-bg-user.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";
import { ModalEditAddress } from "../ModalEditAddress/modalEditAddress";

interface ProfileBGProps {
  isEditable: boolean;
}

export default function ProfileBG({ isEditable }: ProfileBGProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex flex-col items-center gap-10 md:gap-16 lg:gap-20 w-full">
        <Image src={ProfileBg} alt="ProfileBg" className="w-full max-w-[1200px]" />
        <Image
          src={UserProfile}
          alt="UserProfile"
          className="absolute top-8 md:top-12 lg:top-16 w-24 md:w-28 lg:w-32"
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center">{user?.salonName}</h1>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <MapPin className="stroke-red-500" />
            <p className="text-base md:text-lg lg:text-xl text-center">
              {user?.address}, {user?.number}, {user?.city}
            </p>
            {isEditable && (
              <span onClick={() => setIsOpen(true)}>
                <Pencil className="cursor-pointer fill-black stroke-white stroke-1" />
              </span>
            )}
          </div>
        </div>
        {isEditable && (
          <>
            <Image
              src={ChangeUser}
              alt="ChangeUser"
              className="absolute right-[10%] md:right-[15%] lg:right-[25rem] top-[2rem] md:top-[3rem] lg:top-[4rem] cursor-pointer w-8 md:w-10 lg:w-auto"
            />
            <Image
              src={ChangeBgUser}
              alt="ChangeBgUser"
              className="absolute left-[10%] md:left-[15%] lg:left-[57rem] top-[4rem] md:top-[6rem] lg:top-[9rem] cursor-pointer w-8 md:w-10 lg:w-auto"
            />
          </>
        )}
      </div>
      <ModalEditAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        user={user ?? null}
      />
    </div>
  );
}
