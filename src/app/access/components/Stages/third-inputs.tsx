import Image from "next/image";
import progressBar3 from "../../../../public/access-progress-bar-1.svg";
import Link from "next/link";

const ThirdInputs = () => {
  return (
    <div className="w-[80%] flex items-center justify-center">
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
        <Link href={"/home"} className="w-full">
          <button className="w-full  p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
            Criar conta
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThirdInputs;
