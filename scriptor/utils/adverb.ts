import { z } from "zod";

export const AdverbForm = z.tuple([ z.enum([ "positive", "comparative", "superlative" ]) ]);
export const AdverbPrincipalParts = z.tuple([ z.string().regex(/(e|ter)$/) ]);

export default class Adverb {
  positive: string;

  get #stem() {
    if (this.positive.endsWith("iter")) return this.positive.slice(0, -4);
    return this.positive.slice(0, this.positive.endsWith("er") ? -2 : -1);
  }

  get comparative() {
    return `${this.#stem}ius`;
  }

  get superlative() {
    if (this.#stem.endsWith("l")) return `${this.#stem}lime`;
    return this.#stem.endsWith("r") ? `${this.#stem}rime` : `${this.#stem}issime`;
  }

  constructor([ positive ]: z.infer<typeof AdverbPrincipalParts>) {
    this.positive = positive;
  }
};
