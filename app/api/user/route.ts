import { getAuthUser } from "@/lib/getAuthUser";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getAuthUser({ source: "header" });
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(user);
}
