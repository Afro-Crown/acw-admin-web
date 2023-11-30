import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../../../public/footer-logo.svg";
import linkedinLogo from "../../../../public/linkedin-logo.svg";
import instagramLogo from "../../../../public/instagram-logo.svg";
import downloadApp from "../../../../public/download-app-btn.svg";
import googlePlay from "../../../../public/googleplay-btn.svg";
import appleStore from "../../../../public/applestore.svg";


const Footer = () => {
  return (
    <footer className="h-[40%] md:h-[287px] lg:h-[287px] w-full bg-[#A21A1A] flex flex-col items-center gap-1">
      <nav className=" h-[80%] pt-8 w-[60%] flex flex-row justify-between gap-4 md:gap-0 lg:gap-0">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <Image alt="AfroCrown logo" src={footerLogo} className="w-20 md:w-44 lg:w-44"/>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-3">
            <Image alt="AfroCrown logo" src={linkedinLogo}/>
            <Image alt="AfroCrown logo" src={instagramLogo}/>
            <span className="text-[#FAFAFA] text-xs md:text-sm lg:text-sm">Afro Crown LTDA | CNPJ 14.380.200/0001-21 </span>
          </div>
        </div>

        <div className="flex flex-col h-full justify-around">
          <Link href="#"><Image alt="download app" src={downloadApp} /></Link>
          <Link href="#"><Image alt="download from google play" src={googlePlay} /></Link>
          <Link href="#"><Image alt="download from apple store" src={appleStore} /></Link>
        </div>
      </nav>
      <div className="w-[60%] border border-b-0 border-[#FFEAD4AA]"></div>
      <footer className="w-[60%] h-[20%] flex justify-between items-center">
        <div className="w-[50%] flex justify-start pl-2 font-bold">
          <h4 className="text-xs md:text-md lg:text-lg">SEJA UM VOLUNTÁRIO</h4>
          
        </div>
        <div className="w-[70%] md:w-[60%] lg:w-[50%] flex justify-end gap-4">
          <Link href={'/use-terms'}><span className="text-xs md:text-md lg:text-sm">Termos de uso</span></Link>
          <Link href={'/privacy-datas'}><span className="text-xs md:text-md lg:text-md">Políticas de privacidade e dados</span></Link>
        </div>
      </footer>
    </footer>
   );
}
 
export default Footer;