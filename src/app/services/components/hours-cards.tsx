
import { useState } from "react";

const HourCards = () => {

  const [changeColor, setChangeColor] = useState(false);

  function handleClick () {
    setChangeColor(!changeColor)
  }

  return (
    <div className="flex-wrap p-2">
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>7:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>8:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>9:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>10:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>11:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>12:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>13:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>14:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>15:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>16:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>18:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>19:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>20:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>21:00</button>
      <button onClick={handleClick} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-14 text-center ${(changeColor === true) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>22:00</button>
    </div>
   );
}
 
export default HourCards;