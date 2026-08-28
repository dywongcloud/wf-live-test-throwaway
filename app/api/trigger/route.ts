import { NextResponse } from "next/server";
import { start } from "workflow/api";
import { greetFlow } from "@/app/workflows/greetFlow";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") ?? "world";
  const run = await start(greetFlow, [name]);
  return NextResponse.json({ runId: run.runId });
}
