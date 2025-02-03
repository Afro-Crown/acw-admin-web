"use client";

import { useEffect, useMemo } from "react";

import LoadingComponent from "@atoms/Loading/loading";
import useUsers from "@hooks/useUser";
import { dateToShortString } from "@utils/dateToString";

const tableHeaders = ["Name", "Email", "Phone", "Birth"];

export default function UsersPage() {
  const { allUsers, fetchAllUsers, loading } = useUsers();

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tableData = useMemo(() => {
    return allUsers?.map((user: any) => [
      user.name,
      user.email,
      user.phone,
      dateToShortString(user.dob)
    ]);
  }, [allUsers]);

  return (
    <section className="flex w-full items-center justify-center">
      {loading.fetchAllUsers ? (
        <LoadingComponent />
      ) : (
        <div></div>
        // <Table headers={tableHeaders} rows={tableData ?? []} />
      )}
    </section>
  );
}
