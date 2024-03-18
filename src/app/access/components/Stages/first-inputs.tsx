import ProgressBar1 from "../progress-bar-1";

interface props {
  RedirectPage:(page: "FIRST" | "SECOND" | "THIRD" | "FOURTH")=> void 
}
const FirstInputs = ({RedirectPage}:props) => {

  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <ProgressBar1 />
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
      <div className="w-3/4 mt-40">
        <button
          onClick={() => RedirectPage("SECOND")}
          className="w-full text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
};

export default FirstInputs;
