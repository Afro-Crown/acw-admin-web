import { useState } from "react";

const HourCards = () => {

  const [changeColor, setChangeColor] = useState<string[]>([]);
  const hours = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];

  function handleClick (value:string) {
    if(changeColor.includes(value)){
    return setChangeColor((old) => old.filter((item) => item != value))
    }
    setChangeColor((old) => [...old, value])
   }

  return (
    <div className="flex-wrap p-2">
      {
         hours.map((item, index) => (
           <button key={index} onClick={() => handleClick(item)} className={`m-[2px] rounded-lg bg-opacity-20 text-sm text-[#616161] py-1 px-1 w-12 font-semibold text-center ${(changeColor.includes(item)) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>{item}</button>
         ))
      }
    </div>
   );
}
 
export default HourCards;