import Image from "next/image";
import footerLogo from "../../../../public/footer-logo.svg";
import linkedinLogo from "../../../../public/linkedin-logo.svg";
import instagramLogo from "../../../../public/instagram-logo.svg";
import footerDivider from "../../../../public/divider.svg";
import { CaretRight } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="h-[287px] w-full bg-[#A21A1A]">
      <nav className=" h-[80%] pt-8">
        <div className="flex flex-col justify-between gap-12 pt-8">
          <div className="">
            <Image alt="AfroCrown logo" src={footerLogo}/>
          </div>
          <div className="flex flex-row gap-3">
            <Image alt="AfroCrown logo" src={linkedinLogo}/>
            <Image alt="AfroCrown logo" src={instagramLogo}/>
            <span className="text-[#FAFAFA] text-sm">Afro Crown LTDA | CNPJ 14.380.200/0001-21 </span>
          </div>
        </div>

        <div>

        </div>
      </nav>
      <Image alt="divider" src={footerDivider} />
      <footer className=" h-[20%] flex justify-between items-center">
        <div className="w-[50%] flex justify-start pl-2 font-bold">
          <h4>SEJA UM VOLUNTÁRIO</h4>
          <CaretRight />
        </div>
        <div className="w-[50%] flex justify-around">
          <span className="text-sm">Termos de uso</span>
          <span className="text-sm">Políticas de privacidade e dados</span>
        </div>
      </footer>
    </footer>
   );
}
 
export default Footer;