import { ProfileIcon } from "@/assets/icons/profile";
import { RateAvailable } from "./rate-available";

export function AvailableCard() {
    return (
        <div className="w-full border-b py-4 border-[#C7C7C7] text-[#2E2E2E]">
            <div className="w-full flex justify-between items-start">
                <div className="flex items-center font-Assistant text-sm">
                    <div className="mr-4 p-2 rounded-full flex items-center justify-center border border-[#2E2E2E]">
                        <ProfileIcon />
                    </div>
                    Ana Raboni
                </div>
                <div className="flex flex-col items-end font-Assistant">
                    <p className="text-xs mb-1">07/11/2023</p>
                    <RateAvailable rate={3} />
                </div>
            </div>
            <div className="w-full">
                <p className="text-[#2E2E2E] font-Assistant text-sm mt-2 mb-4">
                    Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </p>
            </div>
            <div className="flex flex-wrap justify-start mt-2 gap-2">
                <div className="bg-[#FFC8AF33] px-2 py-1 rounded text-[#FF6734] font-Assistant text-sm">Bom atendimento</div>
                <div className="bg-[#FFC8AF33] px-2 py-1 rounded text-[#FF6734] font-Assistant text-sm">Espaço agradável</div>
            </div>
        </div>
    )
}