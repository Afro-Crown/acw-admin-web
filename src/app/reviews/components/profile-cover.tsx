import Image from "next/image";
import { MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import profileBg from "../../../../public/profile-bg.svg";
import userImage from "../../../../public/user-profile.svg";
import changeUser from "../../../../public/change-user.svg";
import changeBgUser from "../../../../public/change-bg-user.svg";

const ProfileReviewsCover = () => {
  return (
    <main>
      <div className="w-full pb-8">
        <Image
          className="absolute left-[140px] top-[160px] md:top-[190px] md:left-[300px] lg:left-[620px] lg:top-[255px] w-28 md:w-40"
          alt="imagem do perfil do salão"
          src={userImage}
        />
        <button>
          <Image
            className="absolute left-[210px] top-[150px] md:left-[400px] lg:left-[720px] lg:top-[235px] w-10 md:w-20 lg:w-20"
            alt="ícone mudar foto do usuário"
            src={changeUser}
            
          />
        </button>
        <Image alt="Imagem de fundo do perfil" src={profileBg} />
        <button>
          <Image
            className="absolute left-[330px] top-[210px] md:left-[640px] md:top-[260px] lg:left-[1100px] lg:top-[335px] w-10 md:w-20 lg:w-20"
            alt="ícone mudar fundo"
            src={changeBgUser}
          />
        </button>
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

export default ProfileReviewsCover;
