import { expect, test } from "bun:test";
import scriptor from "..";

const facile = "facile";
const fortiter = "fortiter";
const laete = "laete";
const misere = "misere";
const sapienter = "sapienter";

test("Positive", () => {
  const form = "positive";

  expect(scriptor(facile, form)).toBe("facile");
  expect(scriptor(fortiter, form)).toBe("fortiter");
  expect(scriptor(laete, form)).toBe("laete");
  expect(scriptor(misere, form)).toBe("misere");
  expect(scriptor(sapienter, form)).toBe("sapienter");
});

test("Comparative", () => {
  const form = "comparative";

  expect(scriptor(facile, form)).toBe("facilius");
  expect(scriptor(fortiter, form)).toBe("fortius");
  expect(scriptor(laete, form)).toBe("laetius");
  expect(scriptor(misere, form)).toBe("miserius");
  expect(scriptor(sapienter, form)).toBe("sapientius");
});

test("Superlative", () => {
  const form = "superlative";

  expect(scriptor(facile, form)).toBe("facillime");
  expect(scriptor(fortiter, form)).toBe("fortissime");
  expect(scriptor(laete, form)).toBe("laetissime");
  expect(scriptor(misere, form)).toBe("miserrime");
  expect(scriptor(sapienter, form)).toBe("sapientissime");
});
