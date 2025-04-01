import { NextResponse } from "next/server";

import { initAdmin } from "@/config/firebaseAdmin";
import { deleteUserAuthAdmin } from "@store/services/firebaseAdmin";

export async function POST(request: Request) {
  const { id } = await request.json();
  await initAdmin();
  const { error } = await deleteUserAuthAdmin(id);

  return NextResponse.json({ error });
}
