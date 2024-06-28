import deepMapValues from "just-deep-map-values";
import formatStringTemplate from "string-template";
import { getPattern, getSuperlativeStem, PrincipalParts, type Shape as AdjectiveShape } from "./utils";
import * as templates from "./templates";
import { z } from "zod";

const decline = (template: AdjectiveShape, data: Record<string, string>) => {
  return deepMapValues(template, (formTemplate: string) => {
    return formatStringTemplate(formTemplate, data);
  }) as AdjectiveShape;
}

export { type AdjectiveShape, PrincipalParts as AdjectivePrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>) => {
  const pattern = getPattern(principalParts);
  const nominativeMasculineSingular = principalParts[0];
  const isIStem = pattern !== "B" || !nominativeMasculineSingular.endsWith("or");

  switch (pattern) {
    case "A":
      return decline(templates.patternA, {
        nominativeMasculineSingular,
        stem: principalParts[1].slice(0, -1),
        vocativeMasculineSingular: nominativeMasculineSingular.endsWith("us") ? `${principalParts[1].slice(0, -1)}e` : nominativeMasculineSingular,
        superlativeStem: getSuperlativeStem(principalParts[1].slice(0, -1), nominativeMasculineSingular, "A")
      });
    case "B":
    case "C":
    case "D":
      const stem = pattern === "B" ? (nominativeMasculineSingular.endsWith("or") ? nominativeMasculineSingular : principalParts[0].slice(0, -2)) : principalParts[1].slice(0, -2);

      return decline(templates.patternBCD, {
        nominativeMasculineSingular,
        nominativeFeminineSingular: pattern === "D" ? principalParts[1] : nominativeMasculineSingular,
        nominativeNeuterSingular: pattern === "C" ? principalParts[0] : (pattern === "B" ? principalParts[1] : principalParts[2]!),
        stem,
        possibleIStem: isIStem ? `${stem}i` : stem,
        ablativeSingular: isIStem ? `${stem}i` : `${stem}e`,
        adverb: stem.endsWith("nt") ? `${stem}er` : `${stem}iter`,
        positive: principalParts.join(", "),
        superlativeStem: getSuperlativeStem(stem, nominativeMasculineSingular, pattern)
      });
    default:
      throw new Error("Failed to determine pattern");
  }
};
