import { z } from "zod";

export const NounForm = z.tuple([
  z.enum([ "nominative", "vocative", "accusative", "genitive", "dative", "ablative" ]),
  z.enum([ "singular", "plural" ])
]);

export const NounPrincipalParts = z.tuple([
  z.string(),
  z.string().regex(/(ae|i|is)$/),
  z.enum([ "f", "m", "n" ])
]);

export default class Noun {
  #principalParts: z.infer<typeof NounPrincipalParts>;

  constructor(principalParts: z.infer<typeof NounPrincipalParts>) {
    this.#principalParts = principalParts;
  }

  get nominative_singular() {
    return this.#principalParts[0];
  }

  get genitive_singular() {
    return this.#principalParts[1];
  }

  get #gender() {
    return this.#principalParts[2];
  }

  get #declension() {
    if (this.genitive_singular.endsWith("ae")) return 1;
    return this.genitive_singular.endsWith("is") ? 3 : 2;
  }

  get #stem() {
    return this.genitive_singular.slice(0, this.#declension === 2 ? -1 : -2);
  }

  get vocative_singular() {
    if (this.#declension === 2 && this.nominative_singular.endsWith("ius")) return `${this.#stem}`;
    if (this.#declension === 2 && this.nominative_singular.endsWith("us")) return `${this.#stem}e`;
    return this.nominative_singular;
  }

  get accusative_singular() {
    const endings = [ "am", "um", "em" ] as const;
    return this.#gender === "n" ? this.nominative_singular : `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get dative_singular() {
    const endings = [ "ae", "o", "i" ] as const;
    return `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get ablative_singular() {
    const endings = [ "a", "o", "e" ] as const;
    return `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get nominative_plural() {
    const endings = [ "ae", "i", "es" ] as const;
    return `${this.#stem}${this.#gender === "n" ? "a" : endings[this.#declension - 1]}`;
  }

  get vocative_plural() {
    return this.nominative_plural;
  }

  get accusative_plural() {
    const endings = [ "as", "os", "es" ] as const;
    return this.#gender === "n" ? this.nominative_plural : `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get genitive_plural() {
    const endings = [ "arum", "orum", "um" ] as const;
    return `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get dative_plural() {
    const endings = [ "is", "is", "ibus" ] as const;
    return `${this.#stem}${endings[this.#declension - 1]}`;
  }

  get ablative_plural() {
    return this.dative_plural;
  }
}
