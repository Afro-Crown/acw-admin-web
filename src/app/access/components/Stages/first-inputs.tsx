import Image from "next/image";
import progressBar1 from "../../../../../public/access-progress-bar-1.svg"
import Link from "next/link";

const FirstInputs = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[80%]">
        <Image alt="Progress bar" src={progressBar1} />
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
        </div>
      </div>
    </div>
  );
};

export default FirstInputs;