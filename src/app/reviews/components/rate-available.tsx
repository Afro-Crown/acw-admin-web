import { Star } from "@phosphor-icons/react";

interface Props {
    rate: number;
}

export function RateAvailable({ rate }: Props) {
    return (
        <div className="flex gap-2">
            <Star weight={rate >= 1 ? "fill" : "regular"} className="text-[#FF8A54]" />
            <Star weight={rate >= 2 ? "fill" : "regular"} className="text-[#FF8A54]" />
            <Star weight={rate >= 3 ? "fill" : "regular"} className="text-[#FF8A54]" />
            <Star weight={rate >= 4 ? "fill" : "regular"} className="text-[#FF8A54]" />
            <Star weight={rate >= 5 ? "fill" : "regular"} className="text-[#FF8A54]" />
        </div>
    )
}