import deepMapValues from "just-deep-map-values";
import formatStringTemplate from "string-template";
import { getConjugation, PrincipalParts, type Shape as VerbShape } from "./utils";
import verbTemplate from "./template";
import { z } from "zod";

export { type VerbShape, PrincipalParts as VerbPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>) => {
  const conjugation = getConjugation(principalParts);

  const presentActiveIndicative = principalParts[0];
  const presentStem = principalParts[1].slice(0, -2);
  const perfectStem = principalParts[2].slice(0, -1);
  const perfectPassiveStem = principalParts[3]?.slice(0, -2) ?? null;

  const presentStemA = conjugation >= 3 ? `${presentStem.slice(0, -1)}i` : presentStem;
  const presentStemB = conjugation >= 3 ? `${presentActiveIndicative.slice(0, -1)}u` : presentStem;
  const presentStemC = conjugation > 3 ? `${presentActiveIndicative.slice(0, -1)}e` : presentStem;

  return deepMapValues(verbTemplate, (template: string) => {
    return formatStringTemplate(template, {
      presentActiveIndicative,
      presentStem,
      perfectStem,
      perfectPassiveStem,
      presentStemA,
      presentStemB,
      presentStemC
    });
  }) as VerbShape;
}
