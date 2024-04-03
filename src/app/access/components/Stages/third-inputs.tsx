import ProgressBar3 from "../progress-bar-3";
import { Steps } from "@/app/enums/multistep-form.enum";
import ProgressBar from "../progressbar";

type ThirdInputsProps = {
  RedirectPage: (page: Steps) => void;
};
const ThirdInputs: React.FC<ThirdInputsProps> = ({ RedirectPage }) => {
  
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
      <ProgressBar />
        <div className="py-8 text-black">
          <span className="text-xs">E-mail comercial</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">
            Mandaremos todos as notificações para esse e-mail.
          </span>
        </div>

        <div className="py-8 text-black">
          <span className="text-xs">Telefone</span>
          <input
            type="text"
            placeholder="(__) _ ____-____"
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">
            Não divulgaremos esse número em seu perfil.
          </span>
        </div>
      </div>
      <div className="w-2/3 mt-40">
        <button  onClick={() => RedirectPage("FOURTH")} className="w-full text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
            Avançar
          </button>
      </div>
    </div>
  );
};

export default ThirdInputs;
