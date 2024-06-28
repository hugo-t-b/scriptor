import deepMapValues from "just-deep-map-values";
import extend from "just-extend";
import formatStringTemplate from "string-template";
import { getDeclension, getSecondDeclensionMasculineVocativeSingular, PrincipalParts, type Shape as NounShape } from "./utils";
import * as templates from "./templates";
import { z } from "zod";

const decline = (template: NounShape, data: Record<string, string>, overrides: NounShape): NounShape => {
  const noun = deepMapValues(template, formTemplate => {
    return formatStringTemplate(formTemplate, data);
  });

  return extend(true, noun, overrides);
}

const Overrides: z.ZodType<NounShape, z.ZodTypeDef, NounShape | undefined> = z.record(z.string(), z.unknown()).default({});

const Options = z.object({
  iStem: z.boolean().default(false),
  overrides: Overrides
}).default({});

type NounOptions = z.input<typeof Options>;
export { type NounOptions, type NounShape, PrincipalParts as NounPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>, passedOptions?: NounOptions) => {
  const declension = getDeclension(principalParts);
  const genitiveSingular = principalParts[1];
  const nominativeSingular = principalParts[0];

  const autoOptions: NounOptions = {
    iStem: declension === "3n" && /(e|al|ar)$/.test(nominativeSingular)
  };

  const options = Options.parse({
    ...autoOptions,
    ...passedOptions
  });

  switch (declension) {
    case "1":
      return decline(templates.firstDeclension, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2)
      }, options.overrides);
    case "2m":
      return decline(templates.secondDeclensionMasculine, {
        nominativeSingular,
        vocativeSingular: getSecondDeclensionMasculineVocativeSingular(nominativeSingular, genitiveSingular),
        stem: genitiveSingular.slice(0, -1)
      }, options.overrides);
    case "2n":
      return decline(templates.secondDeclensionNeuter, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -1)
      }, options.overrides);
    case "3m/f":
      return decline(templates.thirdDeclensionMasculineFeminine, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2),
        possibleIStem: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : genitiveSingular.slice(0, -2)
      }, options.overrides);
    case "3n":
      return decline(templates.thirdDeclensionNeuter, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2),
        ablativeSingular: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : `${genitiveSingular.slice(0, -2)}e`,
        possibleIStem: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : genitiveSingular.slice(0, -2)
      }, options.overrides);
    default:
      throw new Error("Failed to determine declension");
  }
};
