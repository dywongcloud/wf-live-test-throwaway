export async function greet(name: string) {
  "use step";
  return { message: `Hello, ${name}!`, at: Date.now() };
}

export async function record(message: string) {
  "use step";
  console.log("[wf-live-test] step ran:", message);
  return { recorded: true };
}
