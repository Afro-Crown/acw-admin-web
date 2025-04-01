import Image from "next/image";

import emAnalise from "../../../../public/em-analise.svg";
import Button from "../../../components/atoms/Button/button";

export default function AnalisingPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-[#A21A1A]">
      <p className="mt-[100px] h-[99px] w-[257px] text-center text-[28px] font-[300] text-primary">
        O cadastro de{" "}
        <span className="font-[800]">Dellas & Delles Cabeleireiros</span> está
      </p>
      <Image src={emAnalise} alt="Em análise" />
      <p className="mt-40 w-[258px] text-center text-[19px] font-[200] text-primary">
        Fique de olho em seu e-mail. Daremos um retorno em breve.
      </p>
      <Button className="mt-10 h-11 w-[290px] border-primary bg-transparent text-primary">
        Continuar
      </Button>
    </main>
  );
}
