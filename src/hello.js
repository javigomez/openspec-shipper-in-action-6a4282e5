export function greeting(name, language) {
  const trimmed = typeof name === "string" ? name.trim() : "";
  const isSpanish = language === "es";
  if (isSpanish) {
    return trimmed ? `Hola, ${trimmed}!` : "Hola, mundo!";
  }
  return trimmed ? `Hello, ${trimmed}!` : "Hello, world!";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2], process.argv[3]));
}
