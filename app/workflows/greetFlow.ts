import { sleep } from "workflow";
import { greet, record } from "@/app/steps/greet";

export async function greetFlow(name: string) {
  "use workflow";

  const greeting = await greet(name);
  await sleep("2s");
  await record(greeting.message);

  return greeting;
}
