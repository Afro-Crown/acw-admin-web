"use client"
import { useState } from "react";

const WeekDayCards = () => {
  const [changeColor, setChangeColor] = useState(false);

  function handleClick () {
    setChangeColor(!changeColor)
  }

  return ( 
    <div className="flex gap-2">
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Seg</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Ter</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Qua</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Qui</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Sex</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Sab</button>
      <button onClick={handleClick} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-20 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>Dom</button>
    </div>
   );
}
 
export default WeekDayCards;