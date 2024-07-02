import adjectiveTemplate from "./template";
import deepMapValues from "just-deep-map-values";
import extend from "just-extend";
import formatStringTemplate from "string-template";
import { getStem, getSuperlative, PrincipalParts, type Shape as AdverbShape } from "./utils";
import { z } from "zod";

const Overrides: z.ZodType<AdverbShape, z.ZodTypeDef, AdverbShape | undefined> = z.record(z.string(), z.unknown()).default({});

const Options = z.object({
  overrides: Overrides
}).default({});

/** The type for the forms of an adverb. This can be passed to {@link scriptor} for better intellisense.
 * 
 * @example
 * ```ts
 * const forms = scriptor<Adverb>("sapienter");
 * ```
 */
type AdverbOptions = {
  overrides?: AdverbShape
} | undefined;

export { type AdverbOptions, type AdverbShape, PrincipalParts as AdverbPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>, optionsInput?: AdverbOptions) => {
  const options = Options.parse(optionsInput);
  
  const positive = principalParts[0];
  const stem = getStem(positive);
  const superlative = getSuperlative(stem);

  const adverb = deepMapValues(adjectiveTemplate, template => {
    return formatStringTemplate(template, {
      positive,
      stem,
      superlative
    });
  }) as AdverbShape;

  return extend(true, adverb, options.overrides) as AdverbShape;
}
