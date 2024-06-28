import adjectiveTemplate from "./template";
import deepMapValues from "just-deep-map-values";
import formatStringTemplate from "string-template";
import { getStem, getSuperlative, PrincipalParts, type Shape as AdverbShape } from "./utils";
import { z } from "zod";

export { type AdverbShape, PrincipalParts as AdverbPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>) => {
  const positive = principalParts[0];
  const stem = getStem(positive);
  const superlative = getSuperlative(stem);

  const verb = deepMapValues(adjectiveTemplate, (template: string) => {
    return formatStringTemplate(template, {
      positive,
      stem,
      superlative
    });
  }) as AdverbShape;

  return verb;
}
