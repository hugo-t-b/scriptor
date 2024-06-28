import deepMapValues from "just-deep-map-values";
import extend from "just-extend";
import formatStringTemplate from "string-template";
import { getPattern, getSuperlativeStem, PrincipalParts, type Shape as AdjectiveShape } from "./utils";
import * as templates from "./templates";
import { z } from "zod";

const Overrides: z.ZodType<AdjectiveShape, z.ZodTypeDef, AdjectiveShape | undefined> = z.record(z.string(), z.unknown()).default({});

const Options = z.object({
  overrides: Overrides
}).default({});

type AdjectiveOptions = z.input<typeof Options>;

const decline = (template: AdjectiveShape, data: Record<string, string>, overrides: AdjectiveShape): AdjectiveShape => {
  const adjective = deepMapValues(template, formTemplate => {
    return formatStringTemplate(formTemplate, data);
  });

  return extend(true, adjective, overrides);
}

export { type AdjectiveOptions, type AdjectiveShape, PrincipalParts as AdjectivePrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>, optionsInput?: AdjectiveOptions) => {
  const options = Options.parse(optionsInput);

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
      }, options.overrides);
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
      }, options.overrides);
    default:
      throw new Error("Failed to determine pattern");
  }
};
