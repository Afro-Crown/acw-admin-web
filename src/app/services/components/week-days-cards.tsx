"use client"
import { useState } from "react";

const WeekDayCards = () => {

  return ( 
    <div className="flex gap-2">
      <button className="rounded-lg bg-[#C7C7C7] bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center">Seg</button>
      <button className="rounded-lg bg-[#FFD6AD] bg-opacity-20 text-sm text-[#FF6734] py-1 px-2 w-20 text-center">Ter</button>
      <button className="rounded-lg bg-[#FFD6AD] bg-opacity-20 text-sm text-[#FF6734] py-1 px-2 w-20 text-center">Qua</button>
      <button className="rounded-lg bg-[#FFD6AD] bg-opacity-20 text-sm text-[#FF6734] py-1 px-2 w-20 text-center">Qui</button>
      <button className="rounded-lg bg-[#C7C7C7] bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center">Sex</button>
      <button className="rounded-lg bg-[#C7C7C7] bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center">Sab</button>
      <button className="rounded-lg bg-[#C7C7C7] bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center">Dom</button>
    </div>
   );
}
 
export default WeekDayCards;