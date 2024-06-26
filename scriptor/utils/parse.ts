import assertNever from "assert-never";
import { NounForm, NounPrincipalParts } from "./noun";
import { VerbForm, VerbPrincipalParts } from "./verb";
import { z } from "zod";

type PrincipalPartsResult = [ "verb", z.infer<typeof VerbPrincipalParts> ] | [ "noun", z.infer<typeof NounPrincipalParts> ] | null;
type PartOfSpeech = NonNullable<PrincipalPartsResult>[0];

export const parsePrincipalParts = (parts: string): PrincipalPartsResult => {
  const principalParts = parts.split(/, | ,| |,/);
  const verbParse = VerbPrincipalParts.safeParse(principalParts);

  if (verbParse.success) {
    return [ "verb", verbParse.data ];
  }

  const nounParse = NounPrincipalParts.safeParse(principalParts);

  if (nounParse.success) {
    return [ "noun", nounParse.data ];
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
    default:
      assertNever(partOfSpeech);
  }
};
