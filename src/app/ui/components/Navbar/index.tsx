import { List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import acLogo from "../../../public/logo-one.svg";
import userIcon from "../../../public/user-icon.svg";
import { Separator } from "./components/Separator";
import { Menu } from "./components/Menu";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="h-24 w-screen bg-[#FFEAD4] flex items-center justify-start">
            <div className="flex items-center justify-center pl-2">
                <Image src={acLogo} alt="Afro Crown Logo" className="max-w-[180px] md:max-w-[200px] lg:max-w-[340px]" />
            </div>
            <div className="border border-b-0 w-full border-[#A21A1A] mx-8 hidden md:block"></div>
            <nav className="flex items-center justify-end h-full gap-2 font-Trirong mr-4 flex-1 md:min-w-[400px]">
                <ul className="text-[#A21A1A] hidden md:flex h-full items-center gap-4">
                    <Link href="#" className="hover:scale-105">
                        <li>Seja um voluntário</li>
                    </Link>
                    <Separator />
                    <li>Sobre</li>
                    <Separator />
                    <li>Contatos</li>
                    <Separator />
                </ul>
                <button className="">
                    <List size={24} color="#A21A1A" className="md:hidden lg:hidden" />
                </button>
                <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setOpen((old) => !old)}
                >
                    <Image alt="User Icon" src={userIcon} />
                </button>
                {
                    open && <Menu />
                }
            </nav>
        </div>
    )
}

export default Navbar;