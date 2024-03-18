import ProgressBar2 from "../progress-bar-2";

interface props {
  RedirectPage: (page: "FIRST" | "SECOND" | "THIRD" | "FOURTH") => void;
}
const SecondInputs = ({ RedirectPage }: props) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <ProgressBar2 />
        <div className="py-8 text-black">
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
        </div>
      </div>
      <div className="w-3/4 mt-40">
        <button
          onClick={() => RedirectPage("THIRD")}
          className="w-full text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8"
        >
          Avançar
        </button>
      </div>
    </div>
  );
};

export default SecondInputs;
