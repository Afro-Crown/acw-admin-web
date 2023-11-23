import Image from "next/image";
import profileBg from "../../../../public/profile-bg.svg";
import userImage from "../../../../public/user-profile.svg";
import { MapPin } from "@phosphor-icons/react";

const ProfileCover = () => {
  return (
    <>
      <div className="w-full flex items-end justify-center relative mb-14">
        <Image
          className="absolute h-9/10 -bottom-10 object-cover w-[120px] lg:w-auto"
          alt="imagem do perfil do salão"
          src={userImage}
        />
        <Image alt="Imagem de fundo do perfil" src={profileBg} className="rounded-xl h-[100px] w-full object-cover md:h-[180px]" />
      </div>
      <div className="text-black w-screen flex flex-col pt-8 items-center md:max-w-[984px] lg:max-w-[984px] xl:max-w-[984px] 2xl:max-w-[984px] ">
        <h2 className="text-2xl font-bold">Dellas & Delles Cabeleireiros</h2>
        <h4 className="flex flex-row text-md items-center gap-2">
          <MapPin size={16} color="#A21A1A" weight="fill" />
          Av. Ovídio Poletti, 210, Campinas/SP
        </h4>
      </div>
    </>
  );
};

export default ProfileCover;
