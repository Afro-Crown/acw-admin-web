import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../../../public/footer-logo.svg";
import linkedinLogo from "../../../../public/linkedin-logo.svg";
import instagramLogo from "../../../../public/instagram-logo.svg";
import downloadApp from "../../../../public/download-app-btn.svg";
import googlePlay from "../../../../public/googleplay-btn.svg";
import appleStore from "../../../../public/applestore.svg";
import { AppStoreLogo, CaretRight } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="h-[287px] w-full bg-[#A21A1A] flex flex-col items-center gap-1">
      <nav className=" h-[80%] pt-8 w-[60%] flex flex-row justify-between">
        <div className="flex flex-col justify-between gap-12">
          <div className="">
            <Image alt="AfroCrown logo" src={footerLogo}/>
          </div>
          <div className="flex flex-row gap-3">
            <Image alt="AfroCrown logo" src={linkedinLogo}/>
            <Image alt="AfroCrown logo" src={instagramLogo}/>
            <span className="text-[#FAFAFA] text-sm">Afro Crown LTDA | CNPJ 14.380.200/0001-21 </span>
          </div>
        </div>

        <div className="flex flex-col h-full justify-around">
          <Image alt="download app" src={downloadApp} />
          <Image alt="download from google play" src={googlePlay} />
          <Image alt="download from apple store" src={appleStore} />
        </div>
      </nav>
      <div className="w-[60%] border border-b-0 border-[#FFEAD4AA]"></div>
      <footer className="w-[60%] h-[20%] flex justify-between items-center">
        <div className="w-[50%] flex justify-start pl-2 font-bold">
          <h4>SEJA UM VOLUNTÁRIO</h4>
          
        </div>
        <div className="w-[50%] flex justify-end gap-4">
          <span className="text-sm">Termos de uso</span>
          <span className="text-sm">Políticas de privacidade e dados</span>
        </div>
      </footer>
    </footer>
   );
}
 
export default Footer;