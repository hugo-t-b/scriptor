import assertNever from "assert-never";
import { VerbForm, VerbPrincipalParts } from "./verb";
import { z } from "zod";

type PartOfSpeech = NonNullable<ReturnType<typeof parsePrincipalParts>>[0];

export const parsePrincipalParts = (parts: string): [ "verb", z.infer<typeof VerbPrincipalParts> ] | null => {
  const principalParts = parts.split(/, | ,| |,/g);
  const verbParse = VerbPrincipalParts.safeParse(principalParts);

  if (verbParse.success) {
    return [ "verb", verbParse.data ];
  }

  return null;
};

export const parseForm = (partOfSpeech: PartOfSpeech, form: string[]) => {
  switch (partOfSpeech) {
    case "verb":
      const parseResult = VerbForm.safeParse(form);
      return parseResult;
    default:
      assertNever(partOfSpeech);
  }
};
