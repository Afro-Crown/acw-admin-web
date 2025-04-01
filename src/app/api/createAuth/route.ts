import admin from "firebase-admin";
import { NextResponse } from "next/server";

import { initAdmin } from "@/config/firebaseAdmin";
import { createUserAuthAdmin } from "@store/services/firebaseAdmin";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  await initAdmin();

  const emailExists = await admin
    .auth()
    .getUserByEmail(email)
    .then(() => true)
    .catch(() => false);

  if (emailExists) {
    return NextResponse.json({
      uid: null,
      error: "Firebase: Error (auth/email-already-in-use)."
    });
  }

  const { uid, error } = await createUserAuthAdmin(email, password);

  return NextResponse.json({ uid, error });
}
