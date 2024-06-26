import assertNever from "assert-never";
import { AdjectiveForm, AdjectivePrincipalParts } from "./adjective";
import { AdverbForm, AdverbPrincipalParts } from "./adverb";
import { NounForm, NounPrincipalParts } from "./noun";
import { VerbForm, VerbPrincipalParts } from "./verb";
import { z } from "zod";

type PrincipalPartsResult = 
  [ "verb", z.infer<typeof VerbPrincipalParts> ] |
  [ "noun", z.infer<typeof NounPrincipalParts> ] |
  [ "adjective", z.infer<typeof AdjectivePrincipalParts> ] |
  [ "adverb", z.infer<typeof AdverbPrincipalParts> ] |
  null;

type PartOfSpeech = NonNullable<PrincipalPartsResult>[0];

export const parsePrincipalParts = (parts: string): PrincipalPartsResult => {
  const principalParts = parts.split(/, | ,| |,/);
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

  return null;
};

export const parseForm = (partOfSpeech: PartOfSpeech, form: string[]) => {
  switch (partOfSpeech) {
    case "verb":
      const verbParseResult = VerbForm.safeParse(form);
      return verbParseResult;
    case "noun":
      const nounParseResult = NounForm.safeParse(form);
      return nounParseResult;
    case "adjective":
      const adjectiveParseResult = AdjectiveForm.safeParse(form);
      return adjectiveParseResult;
    case "adverb":
      const adverbParseResult = AdverbForm.safeParse(form);
      return adverbParseResult;
    default:
      assertNever(partOfSpeech);
  }
};
