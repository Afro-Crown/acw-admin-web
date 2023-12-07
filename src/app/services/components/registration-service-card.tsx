import { ArrowArcRight, NotePencil, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import DeleteServiceModal from "./delete-service-modal";
import EditServiceModal from "./edit-service-modal";

const RegistrationCard = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleEdit = () => {
    setShowModalEdit((prev) => !prev);
  };
  const handleDelete = () => {
    setShowModalDelete((prev) => !prev);
  };

  return (
    <>
      <main>
        <div className="w-[90%] md:w-[480px] lg:w-[480px] xl:w-[480px] h-[152px] shadow-lg flex text-black">
          <div className="flex flex-col p-4">
            <h2 className="text-lg font-semibold">Corte completo</h2>
            <span className="text-xs">1h55 min</span>
            <p className="text-xs">
              Degradê simples com produtos de qualidade, tenha cachos definidos
              e hidratados
            </p>
            <span className="font-semibold mt-2">R$ 125,00</span>
          </div>
          <div className="w-[30%] p-4 bg-orange-100"></div>
        </div>
        <div className="flex flex-row w-1/2 justify-end pr-2 pt-2 gap-3">
          <button
            onClick={handleEdit}
            className="bg-[#c7c7c7] bg-opacity-20 py-2 px-4 rounded-xl text-[#616161] flex justify-between items-center gap-2"
          >
            <NotePencil size={16} color="#616161" weight="light" />
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#A21A1A] bg-opacity-10 py-2 p-4 rounded-xl text-[#A21A1A] flex justify-between items-center gap-2"
          >
            <Trash size={16} color="#A21A1A" weight="light" />
            Excluir
          </button>
        </div>
        {showModalDelete && (
          <DeleteServiceModal closeModal={() => setShowModalDelete(false)} />
        )}
        {showModalEdit && (
          <EditServiceModal closeModal={() => setShowModalEdit(false)} />
        )}
      </main>
    </>
  );
};

export default RegistrationCard;
