import { expect, test } from "bun:test";
import scriptor, { type Adverb } from "..";

const cito = scriptor<Adverb>("cito");
const facile = scriptor<Adverb>("facile");
const fortiter = scriptor<Adverb>("fortiter");
const laete = scriptor<Adverb>("laete");
const misere = scriptor<Adverb>("misere");
const sapienter = scriptor<Adverb>("sapienter");

test("Positive", () => {
  expect(cito.positive).toBe("cito");
  expect(facile.positive).toBe("facile");
  expect(fortiter.positive).toBe("fortiter");
  expect(laete.positive).toBe("laete");
  expect(misere.positive).toBe("misere");
  expect(sapienter.positive).toBe("sapienter");
});

test("Comparative", () => {
  expect(cito.comparative).toBe("citius");
  expect(facile.comparative).toBe("facilius");
  expect(fortiter.comparative).toBe("fortius");
  expect(laete.comparative).toBe("laetius");
  expect(misere.comparative).toBe("miserius");
  expect(sapienter.comparative).toBe("sapientius");
});

test("Superlative", () => {
  expect(cito.superlative).toBe("citissime");
  expect(facile.superlative).toBe("facillime");
  expect(fortiter.superlative).toBe("fortissime");
  expect(laete.superlative).toBe("laetissime");
  expect(misere.superlative).toBe("miserrime");
  expect(sapienter.superlative).toBe("sapientissime");
});
