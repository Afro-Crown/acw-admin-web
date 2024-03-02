import ReactInputVerificationCode from 'react-input-verification-code';

const ValidationCode = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[80%]">
        <p>
          Informe o código de validação que enviamos para <b>e-mail do salão</b>.
        </p>
        <div className="py-8 text-black">
          <span className="text-xs font-bold">Código de validação</span>
          <ReactInputVerificationCode />
          <span className='text-black text-xs text-center pb-8'>Aguarde 5 minutos. Não recebeu o e-mail?</span>
          <span className='text-orange-500 font-semibold text-xs'>Reenviar código</span>
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

export default ValidationCode;
