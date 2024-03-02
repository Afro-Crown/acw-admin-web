
import ValidationCodeInput from './validation-code-input';

const ValidationCode = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[80%]">
        <p>
          Informe o código de validação que enviamos para <b>e-mail do salão</b>.
        </p>
        <div className="py-8 text-black">
          <span className="text-xs font-bold">Código de validação</span>
          <ValidationCodeInput />
          <div className='w-full flex flex-col items-start'>
            <span className='text-black text-xs text-center'>Aguarde 5 minutos. Não recebeu o e-mail?</span>
            <span className='text-orange-500 font-semibold text-xs'>Reenviar código</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationCode;
