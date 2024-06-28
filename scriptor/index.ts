import { assertNever } from "assert-never";
import { parsePrincipalParts } from "./utils/parse";

import createAdjective, { type AdjectiveShape as Adjective } from "./adjectives";
import createAdverb, { type AdverbShape as Adverb } from "./adverbs";
import createNoun, { type NounOptions, type NounShape as Noun } from "./nouns";
import createVerb, { type VerbShape as Verb } from "./verbs";

type Word = Adjective | Adverb | Noun | Verb;

export type { Word, Adjective, Adverb, Noun, Verb };

export default <PartOfSpeech extends Word>(parts: string | string[], options?: NounOptions): PartOfSpeech => {
  const [ partOfSpeech, principalParts ] = parsePrincipalParts(parts);

  switch (partOfSpeech) {
    case "verb":
      return createVerb(principalParts) as PartOfSpeech;
    case "noun":
      return createNoun(principalParts, options) as PartOfSpeech;
    case "adjective":
      return createAdjective(principalParts) as PartOfSpeech;
    case "adverb":
      return createAdverb(principalParts) as PartOfSpeech;
    default:
      assertNever(partOfSpeech);
  }
}
