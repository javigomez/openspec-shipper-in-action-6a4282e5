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
