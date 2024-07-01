import { z } from "zod";

type Form = "positive" | "comparative" | "superlative" | "adverb";
type GrammaticalCase = "nominative" | "vocative" | "accusative" | "genitive" | "dative" | "ablative";
type Gender = "masculine" | "feminine" | "neuter";
type GrammaticalNumber = "singular" | "plural";

export type Shape = {
  [grammaticalCase in GrammaticalCase]?: {
    [gender in Gender]?: {
      [grammaticalNumber in GrammaticalNumber]?: string;
    }
  }
} & {
  [form in Form]?: string
};

const PatternA = z.tuple([
  z.string().regex(/(us|er)$/),
  z.string().endsWith("a"),
  z.string().endsWith("um")
]);

const PatternB = z.tuple([
  z.string().regex(/(is|ior)$/),
  z.string().regex(/(e|ius)$/)
]);

const PatternC = z.tuple([
  z.string(),
  z.string().endsWith("is")
]);

const PatternD = z.tuple([
  z.string().endsWith("er"),
  z.string().endsWith("is"),
  z.string().endsWith("e")
]);

export const PrincipalParts = z.union([ PatternA, PatternB, PatternC, PatternD ]);

export const getPattern = (principalParts: z.infer<typeof PrincipalParts>) => {
  if (PatternA.safeParse(principalParts).success) return "A";
  if (PatternB.safeParse(principalParts).success) return "B";
  if (PatternC.safeParse(principalParts).success) return "C";
  if (PatternD.safeParse(principalParts).success) return "D";

  return null;
};

export const getSuperlativeStem = (stem: string, nominativeMasculineSingular: string, pattern: "A" | "B" | "C" | "D") => {
  if (stem.endsWith("l") && pattern !== "A") return `${stem}lim`;
  if (nominativeMasculineSingular.endsWith("er")) return `${nominativeMasculineSingular}rim`;
  if (stem.endsWith("er")) return `${stem}rim`;

  return `${stem}issim`;
};
