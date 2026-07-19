import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/hello.js";

test("returns the default hello world greeting", () => {
  assert.equal(greeting(), "Hello, world!");
});

test("returns a named greeting", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("falls back to the default greeting for a blank name", () => {
  assert.equal(greeting("   "), "Hello, world!");
});

test("returns a Spanish greeting for a named caller", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});

test("returns the default Spanish greeting when no name is given", () => {
  assert.equal(greeting(undefined, "es"), "Hola, mundo!");
});

test("falls back to English for an unknown language", () => {
  assert.equal(greeting("Ada", "fr"), "Hello, Ada!");
});

test("shouts the English greeting when requested", () => {
  assert.equal(greeting("Ada", "en", { shout: true }), "HELLO, ADA!");
});

test("shouts the Spanish greeting when requested", () => {
  assert.equal(greeting("Ada", "es", { shout: true }), "HOLA, ADA!");
});

test("does not shout when the shout flag is absent", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});
