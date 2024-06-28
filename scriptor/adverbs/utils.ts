import { z } from "zod";

type Form = "positive" | "comparative" | "superlative";

export type Shape = {
  [form in Form]?: string;
};

export const PrincipalParts = z.tuple([ z.string().regex(/(e|ter)$/) ]);

export const getStem = (positive: string) => {
  if (positive.endsWith("iter")) return positive.slice(0, -4);
  if (positive.endsWith("er")) return positive.slice(0, -2);
  return positive.slice(0, -1);
};

export const getSuperlative = (stem: string) => {
  if (stem.endsWith("l")) return `${stem}lime`;
  if (stem.endsWith("r")) return `${stem}rime`;
  return `${stem}issime`;
};
