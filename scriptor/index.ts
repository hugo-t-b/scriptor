import Verb from "./utils/verb";

export default (principalParts: string, ...form: string[]): string => {
  const parts = principalParts.split(/, | ,| |,/g);

  if (!Verb.checkPrincipalParts(parts)) {
    throw new Error("Principal parts missing or invalid");
  }

  const verb = new Verb(parts);

  if (!Verb.isFinite(form)) {
    const key = form.join("_");
    const result = verb[key];

    if (typeof result !== "string") {
      throw new Error("Unsupported or invalid form");
    }

    return result;
  }
  
  const [ person, grammaticalNumber ] = form;
  const personNumberIndex = parseInt(person.charAt(0)) + (grammaticalNumber === "plural" ? 3 : 0) - 1;
  
  const key = form.toSpliced(0, 2).join("_");
  const fullConjugation: string[] | string | null = verb[key];
  const result = Array.isArray(fullConjugation) ? fullConjugation[personNumberIndex] : null;

  if (!result) {
    throw new Error("Unsupported or invalid form");
  }

  return result;
};
