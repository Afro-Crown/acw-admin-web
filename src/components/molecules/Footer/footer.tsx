import Image from 'next/image';
import logo from '../../../../public/footer-logo.svg';
import linkedin from '../../../../public/linkedin-logo.svg';
import instagram from '../../../../public/instagram-logo.svg';
import downloadApp from '../../../../public/download-app-btn.svg';
import googlePlay from '../../../../public/googleplay-btn.svg';
import appleStore from '../../../../public/applestore.svg';
import divider from '../../../../public/divider.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-secondary w-full h-64 fixed bottom-0">
      <div className="w-2/3 flex flex-col justify-between gap-2 mb-2">
        <div className="flex justify-between">
          <div>
            <Image src={logo} alt="Logo" className="m-2" />
            <div className="flex gap-4 -mb-20">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="linkedin" className="my-16" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="instagram" className="my-16" />
              </a>
              <p className="text-white font-extralight my-16">Afro Crow LTDA | CNPJ 14.380.200/0001-21</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 m-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image src={downloadApp} alt="DownloadApp" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <Image src={appleStore} alt="AppleStore" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Image src={googlePlay} alt="GooglePlay" />
            </a>
          </div>
        </div>
        <Image src={divider} alt="divide" className="mt-0 w-full" />
        <div className="text-white flex h-full items-end gap-x-8">
          <Link href="/volunteer" className="font-semibold">SEJA UM VOLUNTÁRIO &gt; </Link>
          <div className="ml-auto flex gap-x-8">
            <p className="font-light">Termos de uso </p>
            <p className="font-light">Política de privacidade e dados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}