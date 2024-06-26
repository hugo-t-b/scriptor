import { assertNever } from "assert-never";
import { parseForm, parsePrincipalParts } from "./utils/parse";

import Adjective from "./utils/adjective";
import Adverb from "./utils/adverb";
import Noun from "./utils/noun";
import Verb from "./utils/verb";

const validateKey = (key: string, word: Adjective | Adverb | Noun | Verb): key is keyof typeof word => key in word;

export default (parts: string, ...form: string[]): string => {
  const principalPartsParseResult = parsePrincipalParts(parts);

  if (!principalPartsParseResult) {
    throw new Error("Missing or invalid principal parts");
  }

  const [ partOfSpeech, principalParts ] = principalPartsParseResult;
  const formParseResult = parseForm(partOfSpeech, form);

  if (!formParseResult.success) {
    throw new Error("Unsupported or invalid form");
  }

  switch (partOfSpeech) {
    case "verb":
      const verb = new Verb(principalParts);

      if (formParseResult.data.length === 5) {
        const verbKey = formParseResult.data.toSpliced(0, 2).join("_");

        if (!validateKey(verbKey, verb)) {
          throw new Error("Unsupported or invalid form");
        }

        const fullConjugation = verb[verbKey];

        if (!Array.isArray(fullConjugation)) {
          throw new Error("Invalid form");
        }

        const [ person, grammaticalNumber ] = formParseResult.data;
        const personNumberIndex = parseInt(person.charAt(0)) + (grammaticalNumber === "plural" ? 3 : 0) - 1;
        const verbResult = fullConjugation[personNumberIndex];

        if (!verbResult) {
          throw new Error("Invalid form");
        }

        return verbResult;
      }

      const verbKey = formParseResult.data.join("_");

      if (!validateKey(verbKey, verb)) {
        throw new Error("Unsupported or invalid form");
      }

      const verbResult = verb[verbKey];

      if (typeof verbResult !== "string") {
        throw new Error("Invalid form");
      }

      return verbResult;
    case "noun":
      const noun = new Noun(principalParts);
      const nounKey = formParseResult.data.join("_");

      if (!validateKey(nounKey, noun)) {
        throw new Error("Unsupported or invalid form");
      }

      const nounResult = noun[nounKey];

      if (typeof nounResult !== "string") {
        throw new Error("Invalid form");
      }

      return nounResult;
    case "adjective":
      const adjective = new Adjective(principalParts);
      const adjectiveKey = formParseResult.data.join("_");

      if (!validateKey(adjectiveKey, adjective)) {
        throw new Error("Unsupported or invalid form");
      }

      const adjectiveResult = adjective[adjectiveKey];

      if (typeof adjectiveResult !== "string") {
        throw new Error("Invalid form");
      }

      return adjectiveResult;
    case "adverb":
      const adverb = new Adverb(principalParts);
      const adverbKey = formParseResult.data[0];

      if (!validateKey(adverbKey, adverb)) {
        throw new Error("Unsupported or invalid form");
      }

      const adverbResult = adverb[adverbKey];

      if (typeof adverbResult !== "string") {
        throw new Error("Invalid form");
      }

      return adverbResult;
    default:
      assertNever(partOfSpeech);
  }
}
