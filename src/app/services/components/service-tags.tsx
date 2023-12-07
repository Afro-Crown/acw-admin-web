import { useState } from "react";

const ServiceTags = () => {
  const [changeColor, setChangeColor] = useState<string[]>([]);
  const servicesTags = [
    "Cortes",
    "Tinturas",
    "Tranças",
    "Pacotes",
    "Infantil",
  ];

  function handleClick(value: string) {
    if (changeColor.includes(value)) {
      return setChangeColor((old) => old.filter((item) => item != value));
    }
    setChangeColor((old) => [...old, value]);
  }
  return (
    <div className="mb-3">
      {
        servicesTags.map((item, index) => (
          <button key={index} onClick={() => handleClick(item)} className={`m-[2px] rounded-lg bg-opacity-20 text-xs text-[#616161] py-1 px-1 w-14 text-center ${(changeColor.includes(item)) ? 'bg-[#FFD6AD] text-[#FF6734]': 'bg-[#c7c7c7]' }`}>
            {item}
          </button>
        ))
      }
    </div>
  );
};

export default ServiceTags;
