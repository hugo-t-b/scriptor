import { assertNever } from "assert-never";
import parsePrincipalParts from "./utils/parse";

import createAdjective, { type AdjectiveShape as Adjective, type AdjectiveOptions } from "./adjectives";
import createAdverb, { type AdverbShape as Adverb, type AdverbOptions } from "./adverbs";
import createNoun, { type NounShape as Noun, type NounOptions } from "./nouns";
import createVerb, { type VerbShape as Verb, type VerbOptions } from "./verbs";

type Word = Adjective | Adverb | Noun | Verb;
type Options = AdjectiveOptions | AdverbOptions | NounOptions | VerbOptions;

export type { Word, Adjective, Adverb, Noun, Verb, Options };

/**
 * Conjugate or decline a word. `scriptor` will automatically detect its part of speech.
 * 
 * @param parts The principal parts of the word as a string or array.
 * @param options Additional options, such as [overrides](./README.md#overrides) or options specific to the part of speech (optional).
 * @returns An object with every supported form of the word.
 * 
 * ```ts
 * const noun = scriptor("scriptor, scriptoris, m");
 * console.log(noun.nominative.plural); //=> "scriptores"
 * ```
 */
export default <PartOfSpeech extends Word>(parts: string | string[], options?: Options): PartOfSpeech => {
  const [ partOfSpeech, principalParts ] = parsePrincipalParts(parts);

  switch (partOfSpeech) {
    case "verb":
      return createVerb(principalParts, options as VerbOptions) as PartOfSpeech;
    case "noun":
      return createNoun(principalParts, options as NounOptions) as PartOfSpeech;
    case "adjective":
      return createAdjective(principalParts, options as AdjectiveOptions) as PartOfSpeech;
    case "adverb":
      return createAdverb(principalParts, options as AdverbOptions) as PartOfSpeech;
    default:
      assertNever(partOfSpeech);
  }
}
