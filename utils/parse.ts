import removeAccents from "remove-accents";
import { z } from "zod";

import { AdjectivePrincipalParts } from "../adjectives";
import { AdverbPrincipalParts } from "../adverbs";
import { NounPrincipalParts } from "../nouns";
import { VerbPrincipalParts } from "../verbs";

type PrincipalPartsResult = 
  [ "verb", z.infer<typeof VerbPrincipalParts> ] |
  [ "noun", z.infer<typeof NounPrincipalParts> ] |
  [ "adjective", z.infer<typeof AdjectivePrincipalParts> ] |
  [ "adverb", z.infer<typeof AdverbPrincipalParts> ];

const PrincipalParts = z.preprocess(
  parts => typeof parts === "string" ? parts.trim().split(/, | ,| |,/).map(part => removeAccents(part)) : parts,
  z.union([ AdjectivePrincipalParts, AdverbPrincipalParts, NounPrincipalParts, VerbPrincipalParts ])
);

const parsePrincipalParts = (parts: unknown): PrincipalPartsResult => {
  const principalParts = PrincipalParts.parse(parts);
  const verbParse = VerbPrincipalParts.safeParse(principalParts);

  if (verbParse.success) {
    return ["verb", verbParse.data];
  }

  const nounParse = NounPrincipalParts.safeParse(principalParts);

  if (nounParse.success) {
    return ["noun", nounParse.data];
  }

  const adjectiveParse = AdjectivePrincipalParts.safeParse(principalParts);

  if (adjectiveParse.success) {
    return ["adjective", adjectiveParse.data];
  }

  const adverbParse = AdverbPrincipalParts.safeParse(principalParts);

  if (adverbParse.success) {
    return ["adverb", adverbParse.data];
  }

  throw new Error("Principal parts valid but part of speech could not be determined");
};

export default (parts: unknown) => {
  try {
    return parsePrincipalParts(parts);
  } catch (error) {
    throw new Error("Missing or invalid principal parts", {
      cause: error
    });
  }
}
