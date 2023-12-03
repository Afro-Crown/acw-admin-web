import { Star } from "@phosphor-icons/react";
import { AvailableCard } from "./available-card";

export function Available() {

    const data = ['', ''];

    return (
        <div className="mt-16 w-full flex flex-col items-center">
            <div className="text-[#2E2E2E] flex justify-between items-center max-w-[478px] w-full">
                <div className="flex items-center text-3xl font-Assistant font-light">
                    <Star weight="fill" className="text-[#FF8A54] mr-2" />
                    3,3
                </div>
                <span className="font-Assistant text-lg">2 avaliações</span>
            </div>
            <div className="mt-4 max-w-[478px] w-full">
                {
                    data.map((item, index) => (
                        <AvailableCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}