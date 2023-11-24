const ServiceInfos = () => {
  return ( 
    <div className="pb-20">
      <div>
        <h2 className="text-lg font-semibold">Nome</h2>
        <input type="text" placeholder="Ex:Hidratação + Pontas" className="w-full appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"></input>
        <span className="text-sm text-[#949494]">máximo 20 caracteres</span>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Preço</h2>
        <input type="text" placeholder="R$" className="w-full appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"></input>
      </div>
      <div className="w-[30%]">
        <h2 className="text-lg font-semibold">Duração</h2>
        <div className="flex items-center text-center text-md text-[#949494] gap-0">
          <input type="text" placeholder="   00" className="w-8 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"></input>
          <span>h</span>
          <input type="text" placeholder="   00" className="w-8 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"></input>
          <span>min</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Descrição</h2>
        <input type="text" placeholder="(Opcional)" className="w-full appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 rounded-xl border-2 bg-transparent p-4 h-32"></input>
      </div>
    </div>
    
   );
}
 
export default ServiceInfos;