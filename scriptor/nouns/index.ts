import deepMapValues from "just-deep-map-values";
import formatStringTemplate from "string-template";
import { getDeclension, getSecondDeclensionMasculineVocativeSingular, PrincipalParts, type Shape as NounShape } from "./utils";
import * as templates from "./templates";
import { z } from "zod";

const decline = (template: NounShape, data: Record<string, string>) => {
  return deepMapValues(template, (formTemplate: string) => {
    return formatStringTemplate(formTemplate, data);
  }) as NounShape;
}

const Options = z.object({
  iStem: z.boolean()
});

export type NounOptions = Partial<z.infer<typeof Options>>;
export { type NounShape, PrincipalParts as NounPrincipalParts };

export default (principalParts: z.infer<typeof PrincipalParts>, passedOptions?: NounOptions) => {
  const declension = getDeclension(principalParts);
  const genitiveSingular = principalParts[1];
  const nominativeSingular = principalParts[0];

  const defaultOptions: z.infer<typeof Options> = {
    iStem: declension === "3n" && /(e|al|ar)$/.test(nominativeSingular)
  };

  const options = Options.parse({
    ...defaultOptions,
    ...passedOptions
  });

  switch (declension) {
    case "1":
      return decline(templates.firstDeclension, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2)
      });
    case "2m":
      return decline(templates.secondDeclensionMasculine, {
        nominativeSingular,
        vocativeSingular: getSecondDeclensionMasculineVocativeSingular(nominativeSingular, genitiveSingular),
        stem: genitiveSingular.slice(0, -1)
      });
    case "2n":
      return decline(templates.secondDeclensionNeuter, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -1)
      });
    case "3m/f":
      return decline(templates.thirdDeclensionMasculineFeminine, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2),
        possibleIStem: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : genitiveSingular.slice(0, -2)
      });
    case "3n":
      return decline(templates.thirdDeclensionNeuter, {
        nominativeSingular,
        stem: genitiveSingular.slice(0, -2),
        ablativeSingular: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : `${genitiveSingular.slice(0, -2)}e`,
        possibleIStem: options.iStem ? `${genitiveSingular.slice(0, -2)}i` : genitiveSingular.slice(0, -2)
      });
    default:
      throw new Error("Failed to determine declension");
  }
};
