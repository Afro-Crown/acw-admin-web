import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import userIcon from "../../../../public/user-icon.svg";

const ReviewCard = () => {
  return (
    <div className="flex">
      <div className="w-[80%] flex flex-col">
        <div className="flex flex-row text-black text-sm items-center gap-4 pl-2 py-2">
          <Image src={userIcon} alt="Foto de usuário" />
          <span>Rayssa Paviotti</span>
        </div>
        <div className="text-black text-xs">
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            illum, ipsum ut aliquid quidem nesciunt.
          </p>
        </div>
        <div className="h-8 flex gap-2 pl-1">
          <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
            Produtos de qualidade
          </div>
          <div className="rounded-md bg-[#FFC8AF] bg-opacity-20 text-[#FF6734] text-xs px-2 h-fit py-1 flex items-center w-fit">
            Espaço agradável
          </div>
        </div>
      </div>
      <div className="w-[20%] text-black text-[10px] flex flex-col justify-center items-end">
        <span>07/11/2023</span>
        <div className="flex w-1/2 justify-between">
          <Star weight="fill" color="#F67F57" size={12} />
          <Star weight="fill" color="#F67F57" size={12} />
          <Star weight="regular" color="#F67F57" size={12} />
          <Star weight="regular" color="#F67F57" size={12} />
          <Star weight="regular" color="#F67F57" size={12} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
