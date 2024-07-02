import { assertNever } from "assert-never";
import parsePrincipalParts from "./utils/parse";

import createAdjective, { type AdjectiveShape as Adjective, type AdjectiveOptions } from "./adjectives";
import createAdverb, { type AdverbShape as Adverb, type AdverbOptions } from "./adverbs";
import createNoun, { type NounShape as Noun, type NounOptions } from "./nouns";
import createVerb, { type VerbShape as Verb, type VerbOptions } from "./verbs";

/** General type for a word returned from {@link scriptor}. */
type Word = Adjective | Adverb | Noun | Verb;

/** General type for the options that {@link scriptor} optionally takes as its second argument. */
type Options = AdjectiveOptions | AdverbOptions | NounOptions | VerbOptions;

export type { Word, Adjective, Adverb, Noun, Verb, Options };

/**
 * Conjugates or declines a word. The part of speech will be automatically detected.
 * 
 * @param parts The principal parts of the word as a string or array.
 * @param options Additional options, such as [overrides](./README.md#overrides) or options specific to the part of speech (optional).
 * @returns An object with every supported form of the word.
 * 
 * @example Basic usage
 * ```ts
 * const declined = scriptor("scriptor, scriptoris, m");
 * console.log(declined.nominative.plural); //=> "scriptores"
 * ```
 * Other forms of _scriptor_ can also be accessed as properties of `declined`.
 * 
 * @example Specifying options
 * ```ts
 * const declined = scriptor("ars, artis, f", { iStem: true });
 * console.log(declined.genitive.plural); //=> "artium"
 * ```
 * 
 * To correctly decline the i-stem noun _ars_, the `options` argument is needed to specify that it is i-stem.
 * 
 * @example Specifying the return type
 * ```ts
 * const noun = scriptor<Noun>("scriptor, scriptoris, m");
 * ```
 */
const scriptor = <PartOfSpeech extends Word>(parts: string | string[], options?: Options): PartOfSpeech => {
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
};

export default scriptor;
