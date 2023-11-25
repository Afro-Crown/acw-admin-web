import { NextIcon } from "@/assets/icons/option-service/NextIcon";

const ButtonInsert = () => {
    return (
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#F67F57] to-[#FF6734] px-6 py-3 rounded-full shadow-md hover:from-[#fc926e] hover:to-[#ff9d7d]">
            Adicionar serviços
            <NextIcon />
        </button>
    )
}

export default ButtonInsert;