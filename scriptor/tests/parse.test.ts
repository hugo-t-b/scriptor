import { expect, test } from "bun:test";
import scriptor, { type Adjective, type Adverb, type Noun, type Verb } from "..";

test("Ignores macrons", () => {
  const adjective = scriptor<Adjective>("dēscrīptus, dēscrīpta, dēscrīptum");
  const adverb = scriptor<Adverb>("ācriter");
  const noun = scriptor<Noun>("scrīptiō, scrīptiōnis, f");
  const verb = scriptor<Verb>("scrībō, scrībere, scrīpsī, scrīptus");

  expect(adjective.positive).toBe("descriptus, descripta, descriptum");
  expect(adverb.positive).toBe("acriter");

  expect(noun.nominative?.singular).toBe("scriptio");
  expect(noun.genitive?.singular).toBe("scriptionis");

  expect(verb.indicative?.active?.present?.singular?.first).toBe("scribo");
  expect(verb.infinitive?.active?.present).toBe("scribere");
  expect(verb.indicative?.active?.perfect?.singular?.first).toBe("scripsi");
  expect(verb.participle?.passive?.perfect).toBe("scriptus, scripta, scriptum");
});

test("Accepts principal parts as strings or arrays", () => {
  expect(scriptor<Noun>("scriptor, scriptoris, m").nominative?.singular).toBe("scriptor");
  expect(scriptor<Noun>("scriptor ,scriptoris ,m").nominative?.singular).toBe("scriptor");
  expect(scriptor<Noun>("scriptor,scriptoris,m").nominative?.singular).toBe("scriptor");
  expect(scriptor<Noun>("scriptor scriptoris m").nominative?.singular).toBe("scriptor");
  expect(scriptor<Noun>(" scriptor, scriptoris, m ").nominative?.singular).toBe("scriptor");
  expect(scriptor<Noun>(["scriptor", "scriptoris", "m"]).nominative?.singular).toBe("scriptor");
});
