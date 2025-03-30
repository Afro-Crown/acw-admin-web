"use client";

import { Pencil, MapPin } from "lucide-react";
import Image from "next/image";

import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";

import ChangeBgUser from "../../../../public/change-bg-user.svg";
import ChangeUser from "../../../../public/change-user.svg";
import ProfileBg from "../../../../public/profile-bg.svg";
import UserProfile from "../../../../public/user-profile.svg";

interface ProfileBGProps {
  isEditable: boolean;
}

export default function ProfileBG({ isEditable }: ProfileBGProps) {
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center gap-20">
        <Image src={ProfileBg} alt="ProfileBg" className="" />
        <Image
          src={UserProfile}
          alt="UserProfile"
          className="absolute top-16"
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-extrabold">{user?.salonName}</h1>
          <div className="flex items-center gap-2">
            <MapPin className="stroke-red-500" />
            <p className="text-xl">{user?.neighboard}, {user?.number},{user?.city}/PE</p>
            {isEditable && (
              <Pencil className="cursor-pointer fill-black stroke-white stroke-1" />
            )}
          </div>
        </div>
        {isEditable && (
          <>
            <Image
              src={ChangeUser}
              alt="ChangeUser"
              className="absolute right-[25rem] top-[4rem] cursor-pointer"
            />
            <Image
              src={ChangeBgUser}
              alt="ChangeBgUser"
              className="absolute left-[57rem] top-[9rem] cursor-pointer"
            />
          </>
        )}
      </div>
    </div>
  );
}
