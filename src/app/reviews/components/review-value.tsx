import { Star } from "@phosphor-icons/react";

const ReviewValue = () => {
  return (
    <div className="flex flex-row justify-between w-full px-2">
      <div className="flex items-center gap-2">
        <Star weight="fill" color="#F67F57" size={28} />
        <span className="text-2xl text-black">3,3</span>
      </div>
      <div className="text-black font-semibold">
        <div>2 avaliações</div>
      </div>
    </div>
  );
};

export default ReviewValue;
