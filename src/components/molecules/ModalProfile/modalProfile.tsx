import { Calendar, CircleHelp, Settings, User } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";

import { ModalProps } from "./types";

export function ModalProfile({
  isOpen,
  setIsOpen,
  openHelpModal,
  openModalConfig
}: ModalProps & { openHelpModal: () => void } & {
  openModalConfig: () => void;
}) {
  const { userUid, logoutUser } = useAuth();
  const { data: user } = useProfile(userUid);
  const tabs = [
    {
      icon: <User color="#616161" strokeWidth={1.25} />,
      link: "/profile",
      name: "Seu perfil",
      onClick: () => {
        setIsOpen(false);
      }
    },
    {
      icon: <Calendar color="#616161" strokeWidth={1.25} />,
      link: "/profile/agendamento",
      name: "Agendamentos",
      onClick: () => {
        setIsOpen(false);
      }
    },
    {
      icon: <CircleHelp color="#616161" strokeWidth={1.25} />,
      link: "#",
      name: "Ajuda",
      onClick: () => {
        setIsOpen(false);
        openHelpModal();
      }
    },
    {
      icon: <Settings color="#616161" strokeWidth={1.25} />,
      link: "#",
      name: "Configurações",
      onClick: () => {
        setIsOpen(false);
        openModalConfig();
      }
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="absolute left-[80rem] top-[15rem] w-[18rem]">
        <DialogHeader>
          <DialogTitle className="font-normal">
            Olá, {user?.ownerName}
          </DialogTitle>
          {/* <DialogDescription>Descrição</DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {tabs.map((item, index) => (
            <div
              className="flex gap-3"
              key={item.name + index}
              onClick={item.onClick}
            >
              {item.icon}
              <div className="flex w-[12rem] justify-between">
                <Link href={item.link} className="font-light">
                  {item.name}
                </Link>
                <span className="font-light">{">"}</span>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <button
            className="h-[40px] w-[125px] rounded-sm bg-[#A21A1A] text-sm text-[white]"
            onClick={logoutUser}
          >
            Sair da conta
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
