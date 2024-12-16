'use client'
import Image from "next/image";
import inAnalysis from "../../../public/em-analise.svg"
import Link from "next/link";
import { useAtom } from "jotai";
import { StoreAtom } from "@/atoms/storeAtom";

export default function InAnalyzing() {
  const [store] = useAtom(StoreAtom);

  return (
    <main className="bg-red-background-analysis flex py-8 md:py-20 min-h-screen w-full items-center justify-center font-Assistant">
      <div className="flex flex-col gap-5 text-[#FFD6AD] justify-center items-center">
        <h1 className="font-extrabold text-3xl w-[350px] text-center">O cadastro de {store.salon_name} está</h1>
        <Image src={inAnalysis} width={350} height={350} alt="Análise" />
        <p className="text-center w-[200px] mt-11">Fique de olho em seu e-mail. Daremos um retorno em breve.</p>
        <Link href={"/"}>
          <button className="bg-transparente border border-[#FFD6AD] py-2 px-[100px] rounded-md">Continuar</button>
        </Link>
      </div>
    </main>
  );
}