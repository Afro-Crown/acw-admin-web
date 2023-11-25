"use client";
import Footer from "../../app/home/components/footer";
import Header from "../../app/home/components/header";
import { CaretLeft, CaretRight, Dot, Star } from "@phosphor-icons/react";
import Link from "next/link";
import userIcon from "../../../public/profile-img-review.svg";
import Image from "next/image";
import ProfileReviewsCover from "./components/profile-cover";

const ReviewsScreen = () => {
  return (
    <main className="h-screen w-full">
      <Header />
      <section className="h-full w-full bg-white flex flex-col items-center">
        <div className="w-[984px] h-10 flex justify-between">
          <div className="h-14 flex flex-row justify-between px-64 md:px-32 md:text-xs">
            <div className="text-black text-sm md:text-base lg:text-base flex pl-16 md:pl-2 lg:pl-2 flex-row items-center h-full lg:px-4">
              <Link href={"../home"}>     
                <span className="flex items-center gap-2"><CaretLeft size={12} /> Início</span>
              </Link>
            </div>
          </div>
        </div>
        <main className="flex flex-col items-center">
          <div>
            <ProfileReviewsCover />
          </div>
          <nav className="mt-4 p-2 w-full md:w-2/4 lg:w-4/12">
            <div className="flex flex-row justify-between w-full px-2">
              <div className="flex items-center gap-2">
                <Star weight="fill" color="#F67F57" size={28} />
                <span className="text-2xl text-black">3,3</span>
              </div>
              <div className="text-black font-semibold">
                <div>2 avaliações</div>
              </div>
            </div>
            <div className="h-0 border border-slate-300 mt-2"></div>
            <div className="flex">
              <div className="w-[80%] flex flex-col">
                <div className="flex flex-row text-black text-sm items-center gap-4 pl-2 py-2">
                  <Image src={userIcon} alt="Foto de usuário" />
                  <span>Rayssa Paviotti</span>
                </div>
                <div className="h-8 flex gap-2 pl-1">
                  <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
                    Produtos de qualidade
                  </div>
                  <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
                    Espaço agradável
                  </div>
                </div>
              </div>
              <div className="w-[20%] text-black text-[10px] flex flex-col justify-center items-end">
                <span>07/11/2023</span>
                <div className="flex w-full justify-between">
                  <Star weight="fill" color="#F67F57" size={12} />
                  <Star weight="fill" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                </div>
              </div>
            </div>
            <div className="h-0 border border-slate-300 mt-2"></div>
            <div className="flex">
              <div className="w-[80%] flex flex-col">
                <div className="flex flex-row text-black text-sm items-center gap-4 pl-2 py-2">
                  <Image src={userIcon} alt="Foto de usuário" />
                  <span>Ana Raboni</span>
                </div>
                <div className="text-black text-xs">
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias illum, ipsum ut aliquid quidem nesciunt.
                  </p>
                </div>
                <div className="h-8 flex gap-2 pl-1">
                  <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
                    Bom atendimento
                  </div>
                  <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
                    Espaço agradável
                  </div>
                </div>
              </div>
              <div className="w-[20%] text-black text-[10px] flex flex-col justify-center items-end">
                <span>02/11/2023</span>
                <div className="flex w-full justify-between">
                  <Star weight="fill" color="#F67F57" size={12} />
                  <Star weight="fill" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                  <Star weight="regular" color="#F67F57" size={12} />
                </div>
              </div>
            </div>
          </nav>
        </main>
      </section>
      <Footer />
    </main>
  );
};

export default ReviewsScreen;
