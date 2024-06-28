import { z } from "zod";

type GrammaticalCase = "nominative" | "vocative" | "accusative" | "genitive" | "dative" | "ablative";
type GrammaticalNumber = "singular" | "plural";

export type Shape = {
  [grammaticalCase in GrammaticalCase]?: {
    [grammaticalNumber in GrammaticalNumber]?: string;
  }
};

const FirstDeclension = z.tuple([
  z.string().endsWith("a"),
  z.string().endsWith("ae"),
  z.enum([ "f", "m" ])
]);

const SecondDeclensionMasculine = z.tuple([
  z.string().regex(/(us|r)$/),
  z.string().endsWith("i"),
  z.enum([ "f", "m" ])
]);

const SecondDeclensionNeuter = z.tuple([
  z.string().endsWith("um"),
  z.string().endsWith("i"),
  z.literal("n")
]);

const ThirdDeclensionMasculineFeminine = z.tuple([
  z.string(),
  z.string().endsWith("is"),
  z.enum([ "f", "m" ])
]);

const ThirdDeclensionNeuter = z.tuple([
  z.string(),
  z.string().endsWith("is"),
  z.literal("n")
]);

export const PrincipalParts = z.union([ FirstDeclension, SecondDeclensionMasculine, SecondDeclensionNeuter, ThirdDeclensionMasculineFeminine, ThirdDeclensionNeuter ]);

export const getDeclension = (principalParts: z.infer<typeof PrincipalParts>) => {
  if (FirstDeclension.safeParse(principalParts).success) return "1";

  if (SecondDeclensionMasculine.safeParse(principalParts).success) return "2m";
  if (SecondDeclensionNeuter.safeParse(principalParts).success) return "2n";

  if (ThirdDeclensionMasculineFeminine.safeParse(principalParts).success) return "3m/f";
  if (ThirdDeclensionNeuter.safeParse(principalParts).success) return "3n";

  return null;
};

export const getSecondDeclensionMasculineVocativeSingular = (nominativeSingular: string, genitiveSingular: string) => {
  if (nominativeSingular.endsWith("ius")) return genitiveSingular.slice(0, -1);
  if (nominativeSingular.endsWith("us")) return `${genitiveSingular.slice(0, -1)}e`;
  return nominativeSingular;
}
