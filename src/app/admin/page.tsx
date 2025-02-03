"use client";
import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@hooks/useAuth";

export default function AdminPage() {
  const { userUid } = useAuth();
  const { data } = useProfile(userUid);
  return (
    <section>
      <h1 className="text-2xl font-bold">ADMIN PAGE</h1>
      <div>
        <h2>You are logged in with an administrator account.</h2>
        <h2>Use the navbar to access informations about your application.</h2>
        <h2>
          Email: <b>{data?.email}</b>
        </h2>
      </div>
    </section>
  );
}
