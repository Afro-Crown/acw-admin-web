import Image from "next/image";
import profileBg from "../../../../public/profile-bg.svg";
import userImage from "../../../../public/user-profile.svg";
import { MapPin } from "@phosphor-icons/react";

const ProfileCover = () => {
  return (
    <main>
      <div className="w-full pb-8">
        <Image
          className="absolute left-[140px] top-[170px] md:top-[210px] md:left-[300px] lg:left-[620px] lg:top-[275px] w-28 md:w-40 lg:40"
          alt="imagem do perfil do salão"
          src={userImage}
        />
        <Image alt="Imagem de fundo do perfil" src={profileBg} />
      </div>
      <div className="text-black w-full flex flex-col items-center">
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
