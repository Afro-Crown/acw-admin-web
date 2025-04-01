import Image from "next/image";
import Link from "next/link";

import appleStore from "../../../../public/applestore.svg";
import divider from "../../../../public/divider.svg";
import downloadApp from "../../../../public/download-app-btn.svg";
import logo from "../../../../public/footer-logo.svg";
import googlePlay from "../../../../public/googleplay-btn.svg";
import instagram from "../../../../public/instagram-logo.svg";
import linkedin from "../../../../public/linkedin-logo.svg";

export default function Footer() {
  return (
    <footer className="bottom-0 flex h-64 w-full items-center justify-center bg-secondary">
      <div className="mb-2 flex max-w-6xl flex-col justify-between gap-2">
        <div className="flex justify-between">
          <div>
            <Image src={logo} alt="Logo" className="m-2" />
            <div className="-mb-20 flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="linkedin" className="my-16" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="instagram" className="my-16" />
              </a>
              <p className="my-16 font-extralight text-white">
                Afro Crow LTDA | CNPJ 14.380.200/0001-21
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-col gap-4">
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image src={downloadApp} alt="DownloadApp" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={appleStore} alt="AppleStore" />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={googlePlay} alt="GooglePlay" />
            </a>
          </div>
        </div>
        <Image src={divider} alt="divide" className="mt-0 w-full" />
        <div className="flex h-full items-end gap-x-8 text-white">
          <Link href="/volunteer" className="font-semibold">
            SEJA UM VOLUNTÁRIO &gt;{" "}
          </Link>
          <div className="ml-auto flex gap-x-8">
            <p className="font-light">Termos de uso </p>
            <p className="font-light">Política de privacidade e dados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
