import { assertNever } from "assert-never";
import { parseForm, parsePrincipalParts } from "./utils/parse";
import Verb from "./utils/verb";

const validateKey = (key: string, word: Verb): key is keyof typeof word => key in word;

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
        const key = formParseResult.data.toSpliced(0, 2).join("_");

        if (!validateKey(key, verb)) {
          throw new Error("Unsupported or invalid form");
        }

        const fullConjugation = verb[key];

        if (!Array.isArray(fullConjugation)) {
          throw new Error("Invalid form");
        }

        const [ person, grammaticalNumber ] = formParseResult.data;
        const personNumberIndex = parseInt(person.charAt(0)) + (grammaticalNumber === "plural" ? 3 : 0) - 1;
        const result = fullConjugation[personNumberIndex];

        if (!result) {
          throw new Error("Invalid form");
        }

        return result;
      }

      const key = formParseResult.data.join("_");

      if (!validateKey(key, verb)) {
        throw new Error("Unsupported or invalid form");
      }

      const result = verb[key];

      if (typeof result !== "string") {
        throw new Error("Invalid form");
      }

      return result;
    default:
      assertNever(partOfSpeech);
  }
}
