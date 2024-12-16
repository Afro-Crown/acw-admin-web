"use client";
import { StoreAtom } from "@/atoms/storeAtom";
import { api } from "@/services/api";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export const CountResendCodeEmail = () => {
  const [counter, setCounter] = useState(300);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [store] = useAtom(StoreAtom);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setButtonDisabled(false);
      console.log("acabou");
    }
  }, [counter]);

  const resendHandlerCode = async () => {
    try {
      await api.post("/user/send/validation-account", store.email);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <p className="text-black text-sm my-10">
      Aguarde {Math.floor(counter / 60)}:{counter % 60 < 10 ? "0" : ""}
      {counter % 60} minutos. Não recebeu o e-mail?{" "}
      <button
        type="submit"
        className={`text-gradient-primary font-bold ${
          isButtonDisabled ? "cursor-no-drop opacity-50" : "cursor-pointer"
        }`}
        onClick={() =>
          isButtonDisabled ? null : resendHandlerCode()
        }
      >
        Reenviar código
      </button>
    </p>
  );
};
