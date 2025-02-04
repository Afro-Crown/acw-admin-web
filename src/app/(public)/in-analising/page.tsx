import Image from 'next/image';
import emAnalise from '../../../../public/em-analise.svg';
import Button from '../../../components/atoms/Button/button';

export default function AnalisingPage() {
  return (
    <main className="bg-[#A21A1A] flex h-screen w-full flex-col items-center justify-center gap-3">
      <p className="font-[300] text-center text-[28px] w-[257px] h-[99px] text-primary mt-[100px]">
        O cadastro de <span className="font-[800]">Dellas & Delles Cabeleireiros</span> está
      </p>
      <Image src={emAnalise} alt="Em análise" />
      <p className="mt-40 text-center font-[200] text-[19px] w-[258px] text-primary">Fique de olho em seu e-mail. Daremos um retorno em breve.</p>
      <Button className="mt-10 w-[290px] h-11 text-primary border-primary">Continuar</Button>
    </main>
  );
}