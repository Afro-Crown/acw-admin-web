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
    <div className="mt-10 flex w-full flex-col items-center">
      <div className="relative flex w-full flex-col items-center gap-10 md:gap-16 lg:gap-20">
        <div className="relative w-full max-w-[1200px]">
          <Image src={ProfileBg} alt="ProfileBg" className="w-full" />
          {isEditable && (
            <div className="absolute right-4 top-4 md:right-6 md:top-6 lg:right-8 lg:top-8">
              <Image
                src={ChangeBgUser}
                alt="ChangeBgUser"
                className="h-8 w-8 cursor-pointer md:h-10 md:w-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
        </div>

        <div className="relative -mt-[7rem] md:-mt-[9rem] lg:-mt-[11rem]">
          <Image
            src={UserProfile}
            alt="UserProfile"
            className="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
          />
          {isEditable && (
            <div className="absolute -right-4 top-0">
              <Image
                src={ChangeUser}
                alt="ChangeUser"
                className="h-8 w-8 cursor-pointer md:h-10 md:w-10 lg:h-12 lg:w-12"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-1">
          <h1 className="text-center text-2xl font-extrabold md:text-3xl">
            {user?.salonName}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <MapPin className="stroke-red-500" />
            {user?.address ? (
              <p className="text-center text-base md:text-lg lg:text-xl">
                {user.address}, {user.number}, {user.city}
              </p>
            ) : (
              <p className="text-center text-base text-gray-400 md:text-lg lg:text-xl">
                Carregando endereço...
              </p>
            )}
            {isEditable && (
              <span onClick={() => setIsOpen(true)}>
                <Pencil className="cursor-pointer fill-black stroke-white stroke-1" />
              </span>
            )}
          </div>
        </div>
      </div>
      <ModalEditAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        user={user ?? null}
      />
    </div>
  );
}
