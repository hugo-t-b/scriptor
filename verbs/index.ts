import deepMapValues from "just-deep-map-values";
import extend from "just-extend";
import formatStringTemplate from "string-template";
import { getConjugation, PrincipalParts, type Shape as VerbShape } from "./utils";
import * as templates from "./template";
import { z } from "zod";

const Overrides: z.ZodType<VerbShape, z.ZodTypeDef, VerbShape | undefined> = z.record(z.string(), z.unknown()).default({});

const Options = z.object({
  overrides: Overrides
}).default({});

type VerbOptions = {
  overrides?: VerbShape
} | undefined;

export { type VerbOptions, type VerbShape, PrincipalParts as VerbPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>, optionsInput?: VerbOptions) => {
  const options = Options.parse(optionsInput);
  const conjugation = getConjugation(principalParts);

  const presentActiveIndicative = principalParts[0];
  const presentStem = principalParts[1].slice(0, -2);
  const perfectStem = principalParts[2].slice(0, -1);
  const perfectPassiveStem = principalParts[3]?.slice(0, -2) ?? null;

  const presentStemA = conjugation >= 3 ? `${presentStem.slice(0, -1)}i` : presentStem;
  const presentStemB = conjugation >= 3 ? `${presentActiveIndicative.slice(0, -1)}u` : presentStem;
  const presentStemC = conjugation > 3 ? `${presentActiveIndicative.slice(0, -1)}e` : presentStem;

  const verbTemplate = perfectPassiveStem ? templates.withPerfectPassiveStem : templates.withoutPerfectPassiveStem;

  const verb = deepMapValues(verbTemplate, template => {
    return formatStringTemplate(template, {
      presentActiveIndicative,
      presentStem,
      perfectStem,
      perfectPassiveStem,
      presentStemA,
      presentStemB,
      presentStemC
    });
  });

  return extend(true, verb, options.overrides) as VerbShape;
};
