export function greeting(name) {
  const trimmed = typeof name === "string" ? name.trim() : "";
  return trimmed ? `Hello, ${trimmed}!` : "Hello, world!";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2]));
}
