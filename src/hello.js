export function greeting(name, language, { shout = false } = {}) {
  const trimmed = typeof name === "string" ? name.trim() : "";
  const isSpanish = language === "es";
  const message = isSpanish
    ? trimmed
      ? `Hola, ${trimmed}!`
      : "Hola, mundo!"
    : trimmed
      ? `Hello, ${trimmed}!`
      : "Hello, world!";
  return shout ? message.toUpperCase() : message;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const shout = args.includes("--shout");
  const [name, language] = args.filter((arg) => arg !== "--shout");
  console.log(greeting(name, language, { shout }));
}
