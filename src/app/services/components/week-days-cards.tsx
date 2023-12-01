import { useState } from "react";

const WeekDayCards = () => {
  const [changeColor, setChangeColor] = useState<string[]>([]);
  const weekly = ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'];

  function handleClick (value:string) {
   if(changeColor.includes(value)){
   return setChangeColor((old) => old.filter((item) => item != value))
   }
   setChangeColor((old) => [...old, value])
  }

  return (
    <div className="flex gap-2">
      {
        weekly.map((item, index) => (
          <button key={index} onClick={() => handleClick(item)} className={`rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-2 w-14 font-semibold text-center ${(changeColor.includes(item)) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>{item}</button>
        ))
      }
    </div>
   );
}
 
export default WeekDayCards;