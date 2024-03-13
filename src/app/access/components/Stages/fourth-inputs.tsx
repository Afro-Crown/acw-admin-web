import Image from "next/image";
import progressBar3 from "../../../../../public/access-progress-bar-3.svg";
import Link from "next/link";

const FourthInputs = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <Image alt="Progress bar" src={progressBar3} />
        <div className="py-8 text-black">
          <span className="text-xs">Nome do salão</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
        </div>
        <div className="py-8 text-black">
          <span className="text-xs">CNPJ</span>
          <input
            type="text"
            placeholder="__.___.___/____-__"
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <div className="py-8 text-black">
            <span className="text-xs">Nome do proprietário</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
          <div className="flex">
            <span className="text-xs">CEP</span>
            <input
              type="text"
              placeholder="_____-___"
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
            <span className="text-xs">Cidade</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
        </div>
        <div className="py-8 text-black">
          <span className="text-xs">Rua</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <div className="py-8 text-black">
            <span className="text-xs">Bairro</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-xs">Número</span>
              <input
                type="text"
                placeholder=""
                className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs">Complemento</span>
              <input
                type="text"
                placeholder="(Opcional)"
                className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
              />
            </div>
          </div>
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
      <div className="w-2/3 mt-32">
        <Link className="w-full" href="../../access-verification">
          <button className="w-full text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
            Enviar cadastro
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FourthInputs;
