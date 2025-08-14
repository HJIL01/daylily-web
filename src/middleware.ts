import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // const header = req.headers.get("")

  return NextResponse.next();
}
