import { Calendar, CaretRight, Gear, Question, User } from "@phosphor-icons/react";
import userIconMenu from "../../../../public/nav-menu-user-icon.svg";
import scheduleIconMenu from "../../../../public/schedule-icon-menu.svg";
import Image from "next/image";
import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="rounded-md p-3 bg-white lg:w-[279px] lg:h-[344px] top-[60px] left-[180px] text-gray-600 absolute lg:top-[100px] lg:left-[1150px] md:left-[500px] md:top-[50px] z-10">
      <h2 className="w-full flex items-start text-xl pl-2 py-4">Olá, Dellas &...</h2>

      <Link href={'/reviews'}>
        <button className="flex items-center w-full p-4 justify-between hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <Image alt="user icon" src={userIconMenu} />
            <span>Seu perfil</span>
          </div>
          <CaretRight />
        </button>
      </Link>
      <button className="flex items-center w-full p-4 justify-between hover:bg-gray-50">
        <div className="flex items-center gap-2">
        <Image alt="user icon" src={scheduleIconMenu} />
          <span>Agendamentos</span>
        </div>
        <CaretRight />
      </button>
      <button className="flex items-center w-full p-4 justify-between hover:bg-gray-50">
        <div className="flex items-center gap-2">
          <Question size={24} color="#787878"/>
          <span>Ajuda</span>
        </div>
        <CaretRight />
      </button>
      <button className="flex items-center w-full p-4 justify-between hover:bg-gray-50">
        <div className="flex items-center gap-2">
          <Gear size={24} color="#787878"/>
          <span>Configurações</span>
        </div>
        <CaretRight />
      </button>
      <div className="w-full flex items-start pl-2">
        <button className="rounded-md bg-[#A21A1A] text-white p-3 mt-4 font-semibold hover:bg-[#A21A1AAA]">
          Sair da conta
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
