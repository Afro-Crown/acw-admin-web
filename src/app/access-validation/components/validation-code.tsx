interface props {
  RedirectPage: (page: "CODE" | "PASSWORD") => void;
}
import ValidationCodeInput from "./validation-code-input";

const ValidationCode = ({ RedirectPage }: props) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <p>
          Informe o código de validação que enviamos para <b>e-mail do salão</b>
          .
        </p>
        <div className="py-8 text-black">
          <span className="text-xs font-bold">Código de validação</span>
          <ValidationCodeInput />
          <div className="w-full flex flex-col items-start">
            <span className="text-black text-xs text-center">
              Aguarde 5 minutos. Não recebeu o e-mail?
            </span>
            <span className="text-orange-500 font-semibold text-xs">
              Reenviar código
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-40">
        <button
          onClick={() => RedirectPage("PASSWORD")}
          className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8"
        >
          Validar código
        </button>
      </div>
    </div>
  );
};

export default ValidationCode;
