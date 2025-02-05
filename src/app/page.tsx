import MainImage from "../../public/main-img.svg";
import Image from 'next/image';
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";

import PublicOnlyFeature from "@/components/templates/Public/public";

export default function Home() {
  return (
    <PublicOnlyFeature>
      <main className="bg-[#FFEAD4] overflow-hidden h-screen">
        <div className="flex flex-col items-center justify-center gap-3 h-full">
          <Header />
          <Image src={MainImage} alt="MainImage" className="mb-56"/>
          <Footer />
        </div>
      </main>
    </PublicOnlyFeature>
  );
}