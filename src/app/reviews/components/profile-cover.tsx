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
          className="absolute left-[140px] top-[110px] md:top-[130px] md:left-[300px] lg:left-[620px] lg:top-[225px] w-28 md:w-40"
          alt="imagem do perfil do salão"
          src={userImage}
        />
        <button>
          <Image
            className="absolute left-[210px] top-[100px] md:left-[400px] md:top-[120px] lg:left-[720px] lg:top-[215px] w-10 md:w-14 lg:w-14"
            alt="ícone mudar foto do usuário"
            src={changeUser}
            
          />
        </button>
        <Image alt="Imagem de fundo do perfil" src={profileBg} className="max-w-screen-sm" />
        <button>
          <Image
            className="absolute left-[330px] top-[170px] md:left-[650px] md:top-[220px] lg:left-[1100px] lg:top-[305px] w-10 md:w-14 lg:w-14"
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
