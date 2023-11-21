import Image from "next/image";
import profileBg from "../../../../public/profile-bg.svg";
import userImage from "../../../../public/user-profile.svg";
import { MapPin } from "@phosphor-icons/react";

const ProfileCover = () => {
  return (
    <main>
      <div className="w-screen">
        <Image
          className="absolute left-[140px] top-[140px] md:top-[280px] md:left-[390px] lg:left-[480px] lg:top-[325px] xl:left-[620px] xl:top-[330px] 2xl:left-[1060px] 2xl:top-[330px] w-28 md:w-40 lg:w-40 xl:w-40 2xl:w-40"
          alt="imagem do perfil do salão"
          src={userImage}
        />
        <div>
          <Image alt="Imagem de fundo do perfil" src={profileBg} className="w-screen md:max-w-[984px] lg:max-w-[984px] xl:max-w-[984px] 2xl:max-w-[984px]" />
        </div>
      </div>
      <div className="text-black w-screen flex flex-col pt-8 items-center md:max-w-[984px] lg:max-w-[984px] xl:max-w-[984px] 2xl:max-w-[984px] ">
        <h2 className="text-2xl font-bold">Dellas & Delles Cabeleireiros</h2>
        <h4 className="flex flex-row text-md items-center gap-2">
          <MapPin size={16} color="#A21A1A" weight="fill" />
          Av. Ovídio Poletti, 210, Campinas/SP
        </h4>
      </div>
    </main>
  );
};

export default ProfileCover;
