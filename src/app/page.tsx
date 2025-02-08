import MainImage from "../../public/main-img.svg";
import Image from 'next/image';
import Header from "@/components/molecules/Header/header";
import Footer from "@/components/molecules/Footer/footer";

import PublicOnlyFeature from "@/components/templates/Public/public";

export default function Home() {
  return (
    <PublicOnlyFeature>
      <main className="bg-[#FFEAD4] overflow-hidden h-screen">
        <div className="flex flex-col items-center justify-center gap-">
          <Header />
          <Image src={MainImage} alt="MainImage" className="" />
          <Footer />
        </div>
      </main>
    </PublicOnlyFeature>
  );
}