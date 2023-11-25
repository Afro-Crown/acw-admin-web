import { BackIcon } from "@/assets/icons/navbar/BackIcon"
import { CalendarIcon } from "@/assets/icons/navbar/CalendarIcon"
import { ConfigIcon } from "@/assets/icons/navbar/ConfigIcon"
import { HelpIcon } from "@/assets/icons/navbar/HelpIcon"
import { UserIcon } from "@/assets/icons/navbar/UserIcon"
import Link from "next/link"

export const Menu = () => {
    return (
        <div className="bg-white p-6 absolute font-Assistant text-[#616161] rounded-md shadow-md top-20 z-10">
            <ul>
                <li className="w-60 mb-4">
                    Olá, Dellas &...
                </li>
                <li className="w-60 mb-4 flex items-center justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <UserIcon />
                        Seu perfil
                    </div>
                    <BackIcon />
                </li>
                <Link href="/agendamento" className="hover:scale-105">
                    <li className="w-60 mb-4 flex items-center justify-between cursor-pointer">
                        <div className="flex gap-2">
                            <CalendarIcon />
                            Agendamento
                        </div>
                        <BackIcon />
                    </li>
                </Link>
                <li className="w-60 mb-4 flex items-center justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <HelpIcon />
                        Ajuda
                    </div>
                    <BackIcon />
                </li>
                <li className="w-60 mb-4 flex items-center justify-between cursor-pointer">
                    <div className="flex gap-2">
                        <ConfigIcon />
                        Configurações
                    </div>
                    <BackIcon />
                </li>
                <li className="w-60">
                    <button className="py-2 px-4 bg-[#A21A1A] hover:bg-[#c54141] rounded text-white">
                        Sair da conta
                    </button>
                </li>
            </ul>
        </div>
    )
}