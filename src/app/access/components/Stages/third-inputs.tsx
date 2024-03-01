import Image from "next/image";
import progressBar3 from "../../../../../public/access-progress-bar-3.svg";
import Link from "next/link";

const ThirdInputs = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[80%]">
        <Image alt="Progress bar" src={progressBar3} />
        <div className="py-8 text-black">
          <span className="text-xs">E-mail comercial</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">Mandaremos todos as notificações para esse e-mail.</span>
        </div>

        <div className="py-8 text-black">
          <span className="text-xs">Telefone</span>
          <input
            type="text"
            placeholder="(__) _ ____-____"
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">Não divulgaremos esse número em seu perfil.</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdInputs;
