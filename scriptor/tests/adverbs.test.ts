import { expect, test } from "bun:test";
import scriptor from "..";

const fortiter = "fortiter";
const laete = "laete";
const sapienter = "sapienter";

test.todo("Positive", () => {
  const form = "positive";

  expect(scriptor(fortiter, form)).toBe("fortiter");
  expect(scriptor(laete, form)).toBe("laete");
  expect(scriptor(sapienter, form)).toBe("sapienter");
});

test.todo("Comparative", () => {
  const form = "comparative";

  expect(scriptor(fortiter, form)).toBe("fortius");
  expect(scriptor(laete, form)).toBe("laetius");
  expect(scriptor(sapienter, form)).toBe("sapientius");
});

test.todo("Superlative", () => {
  const form = "superlative";

  expect(scriptor(fortiter, form)).toBe("fortissime");
  expect(scriptor(laete, form)).toBe("laetissime");
  expect(scriptor(sapienter, form)).toBe("sapientissime");
});
