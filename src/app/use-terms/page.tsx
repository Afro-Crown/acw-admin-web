"use client"
import Link from "next/link";
import Footer from "../home/components/footer";
import Header from "../home/components/header";

import { CaretRight } from "@phosphor-icons/react";
import Navbar from "../ui/components/Navbar";

const UseTermsScreen = () => {
  return (
    <main className="bg-white flex flex-col items-center justify-center">
      <Navbar />
      <div className="bg-white min-h-screen w-[90%] max-w-[1000px] flex flex-col items-center py-6 md:py-24 mx-6">
        <h1 className="w-full text-black text-3xl font-semibold mb-4 md:mb-10">Termos de uso</h1>
        <div className="text-black flex flex-col md:flex-row items-start justify-between h-full gap-6 md:gap-28">
          <div className="w-full">
            <p className="text-sm text-justify font-normal font-Assistant mb-8">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
              enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
              lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
              elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
              bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
              sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
              magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
              nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
              varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
              eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
              venenatis nisi. Proin vitae facilisis nisi, ac posuere leo. Nam
              pulvinar blandit velit, id condimentum diam faucibus at. Aliquam
              lacus nisi, sollicitudin at nisi nec, fermentum congue felis.
              Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio.
              Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
              pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
              tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
              sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum
              risus dapibus a. Duis felis ante, varius in neque eu, tempor
              suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus.
              Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut
              arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
              Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue
              posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales
              blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus.
              Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et
              vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor
              sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla
              volutpat aliquet. Ut id convallis nisl. Ut mauris leo, lacinia sed
              elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis
              a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu
              rutrum nec, pellentesque eget ligula. Nunc tempor interdum ex, sed
              cursus nunc egestas aliquet. Pellentesque interdum vulputate
              elementum. Donec erat diam, pharetra nec enim ut, bibendum pretium
              tellus. Vestibulum et turpis nibh. Cras vel ornare velit, ac pretium
              arcu. Cras justo augue, finibus id sollicitudin et, rutrum eget
              metus. Suspendisse ut mauris eu massa pulvinar sollicitudin vel sed
              enim. Pellentesque viverra arcu et dignissim vehicula. Donec a velit
              ac dolor dapibus pellentesque sit amet at erat. Phasellus porttitor,
              justo eu ultrices vulputate, nisi mi placerat lectus, sed rutrum
              tellus est id urna. Aliquam pellentesque odio metus, sit amet
              imperdiet nisl sodales eu. Quisque viverra nunc nec vestibulum
              dapibus. Integer nec diam a libero tincidunt varius sed vel odio.
              Donec rutrum dapibus massa, vel tempor nulla porta id. Suspendisse
              vulputate fermentum sem sollicitudin facilisis. Aliquam vehicula
              sapien nec ante auctor, quis mollis leo tincidunt. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus.
            </p>
            <Link href={'/privacy-datas'}>
              <span className="text-base font-semibold text-[#2E2E2E]">
                Políticas de privacidade e dados 
                <CaretRight size={16} className="inline" />
              </span>
            </Link>
          </div>

          <div className="min-w-[256px] w-full md:w-64 h-full flex flex-col items-start justify-start text-gray-600 ">
            <span className="text-xs font-normal font-Assistant mb-3 hidden md:block">Navegue pelo índice:</span>
            <div className="w-full bg-[#FFF5EA] text-black p-4 flex flex-col items-center gap-2 rounded">
              <h2 className="font-semibold">Índice</h2>
              <ol className=" list-decimal pl-5">
                <h5 className="text-sm font-semibold pb-2">Termos gerais</h5>
                <li className="text-xs underline pb-1">Nossa missão e valores</li>
                <li className="text-xs underline pb-1">Buscas e agendamentos</li>
                <li className="text-xs underline pb-1">Cancelamentos,Problemas, Reembolsos e Modificações de serviço</li>
                <li className="text-xs underline pb-1">Suas responsibilidades e Aceitação de Riscos</li>
                <li className="text-xs underline pb-1">Gerenciamento do seu Anúncio</li>
                <li className="text-xs underline pb-1">Aliquam lacus nisi, sollicitudin</li>
                <li className="text-xs underline pb-1">Aliquam lacus nisi, sollicitudin</li>
              </ol>
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default UseTermsScreen;
