import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { ModalProps } from "./types";
import Link from "next/link";
import { Calendar, CircleHelp, Settings, User } from "lucide-react";


export function ModalProfile({ isOpen, setIsOpen }: ModalProps) {
  const tabs = [
    {
      icon: <User color="#616161" strokeWidth={1.25} />,
      link: "/profile",
      name: "Seu perfil"
    },
    {
      icon: <Calendar color="#616161" strokeWidth={1.25} />,
      link: "/profile/agendamento",
      name: "Agendamentos"
    },
    {
      icon: <CircleHelp color="#616161" strokeWidth={1.25} />,
      link: "/profile",
      name: "Ajuda"
    },
    {
      icon: <Settings color="#616161" strokeWidth={1.25} />,
      link: "/profile",
      name: "Configurações"
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="absolute top-[15rem] left-[80rem] w-[18rem]">
        <DialogHeader>
          <DialogTitle className="font-normal">Olá, Dellas &...</DialogTitle>
          {/* <DialogDescription>Descrição</DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {tabs.map((item) => (
            <div className="flex gap-3">
              {item.icon}
              <div className="flex w-[12rem] justify-between">
                <Link href={item.link} className="font-light">{item.name}</Link>
                <span className="font-light">{">"}</span>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <button className="w-[125px] h-[40px] text-sm bg-[#A21A1A] text-[white] rounded-sm"><Link href="/login">Sair da conta</Link></button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
