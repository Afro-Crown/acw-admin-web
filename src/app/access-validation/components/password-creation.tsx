const PasswordCreation = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
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
    </div>
  );
};

export default PasswordCreation;
