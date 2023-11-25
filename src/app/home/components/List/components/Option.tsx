import Image from "next/image";
import image from "../../../../../../public/service-default.jpeg";
import { DeleteIcon } from "../../../../../assets/icons/option-service/DeleteIcon";
import { EditIcon } from "../../../../../assets/icons/option-service/EditIcon";

const Option = () => {
    return (
        <div className="text-[#2E2E2E]">
            <div className="px-8 py-6 shadow-md border rounded flex items-center gap-2 mb-2">
                <div className="w-[70%] flex flex-col justify-between min-h-[104px]">
                    <div>
                        <p className="text-base">Corte completo</p>
                        <p className="text-xs">1h 55min</p>
                        <p className="text-xs">Degradê simples com produtos de qualidade, tenha cachos definidos e hidratados.</p>
                    </div>
                    <p className="font-semibold">
                        <span className="text-xs mr-1">R$</span>
                        125,00
                    </p>
                </div>
                <Image 
                    src={image}
                    alt="service default"
                    className="w-[30%] aspect-square object-cover object-center rounded"
                />
            </div>
            <div className="flex justify-end gap-2">
                <button className="bg-[#C7C7C733] hover:bg-[#adadad33] rounded px-2 py-1 flex items-center gap-1 text-[#616161]">
                    <EditIcon />
                    Editar
                </button>
                <button className="bg-[#A21A1A1A] hover:bg-[#a21a1a3e] rounded px-2 py-1 flex items-center gap-1 text-[#A21A1A]">
                    <DeleteIcon />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default Option;