"use client";
import Footer from "../../app/home/components/footer";
import Header from "../../app/home/components/header";
import { CaretLeft, CaretRight, Dot, Star } from "@phosphor-icons/react";
import Link from "next/link";
import ProfileReviewsCover from "./components/profile-cover";
import ReviewCard from "./components/review-card";
import Divider from "./components/review-card-divider";
import ReviewValue from "./components/review-value";

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
          <nav className="mt-4 p-2 w-screen md:max-w-[984px] lg:max-w-[984px] xl:max-w-[984px] 2xl:max-w-[984px]">
            <ReviewValue />
            <Divider />
            <ReviewCard />
            <Divider />
            <ReviewCard />
          </nav>
        </main>
      </section>
      <Footer />
    </main>
  );
};

export default ReviewsScreen;
