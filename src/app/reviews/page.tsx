"use client";
import Footer from "../../app/home/components/footer";
import Header from "../../app/home/components/header";
import { CaretLeft, CaretRight, Dot, Star } from "@phosphor-icons/react";
import Link from "next/link";
import ProfileReviewsCover from "./components/profile-cover";
import Navbar from "../ui/components/Navbar";

import analiseTag from "../../../public/cadastroemanalise-tag.svg";
import BreadCrumb from "../ui/components/Breadcrumb";
import ProfileCover from "./components/profile-cover";
import { Available } from "./components/available";
import Image from "next/image";

const ReviewsScreen = () => {
  return (
    <main className="w-full bg-slate-50 flex flex-col items-center">
        <Navbar />
        <div className="w-[90%] max-w-[984px] min-h-screen h-full flex flex-col items-center pb-16">
            <div className="w-full flex justify-between items-center mb-6 md:mb-0 px-3 flex-wrap mt-3 ">
              <BreadCrumb 
                route={[
                  {
                    label: 'Início',
                    path: '../home'
                  },
                  {
                    label: 'Perfil',
                  }
                ]}
              />
              <Image alt="Tag de cadastro e análise" src={analiseTag} />
            </div>
            <ProfileCover />
            <Available />
          </div>
        <Footer />
      </main>
  );
};

export default ReviewsScreen;
