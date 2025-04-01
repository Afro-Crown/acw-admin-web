import Image from "next/image";

import Footer from "@/components/molecules/Footer/footer";
import Header from "@/components/molecules/Header/header";
import PublicOnlyFeature from "@/components/templates/Public/public";

import MainImage from "../../public/main-img.svg";

export default function Home() {
  return (
    <PublicOnlyFeature>
      <main className="overflow-hidden bg-[#FFEAD4]">
        <div className="flex min-h-screen flex-col items-center justify-between">
          <Header />
          <Image src={MainImage} alt="MainImage" className="" />
          <Footer />
        </div>
      </main>
    </PublicOnlyFeature>
  );
}
