"use client";

import { useEffect, useState } from "react";

import useAuth from "@/hooks/useAuth";
import LoadingComponent from "@atoms/Loading/loading";

interface Props {
  children: JSX.Element;
}

export default function FetchAuthState({ children }: Props) {
  const { waitForUserSync } = useAuth();
  const [mountComponent, setComponentMount] = useState(false);

  useEffect(() => {
    const waitAuthUserSync = async () => {
      await waitForUserSync();
      setComponentMount(true);
    };
    if (!mountComponent) {
      waitAuthUserSync();
    }
    return () => {
      setComponentMount(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mountComponent) {
    return <LoadingComponent />;
  }

  return children;
}
