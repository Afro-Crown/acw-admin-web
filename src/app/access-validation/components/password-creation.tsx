interface props {
  RedirectPage: (page: "CODE" | "PASSWORD") => void;
}
const PasswordCreation = ({ RedirectPage }: props) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <div className="py-8 text-black">
          <span className="text-xs font-bold">Crie uma senha</span>
          <input
            type="password"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
        </div>
        <div className="py-8 text-black">
          <span className="text-xs font-bold">Confirmar senha</span>
          <input
            type="password"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-40">
        <button className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Criar conta
        </button>
      </div>
    </div>
  );
};

export default PasswordCreation;
