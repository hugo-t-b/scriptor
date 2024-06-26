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

  static ACCUSATIVE_SINGULAR_ENDINGS = [ "am", "um", "em" ] as const;
  static DATIVE_SINGULAR_ENDINGS = [ "ae", "o", "i" ] as const;
  static ABLATIVE_SINGULAR_ENDINGS = [ "a", "o", "e" ] as const;
  static NOMINATIVE_PLURAL_ENDINGS = [ "ae", "i", "es" ] as const;
  static ACCUSATIVE_PLURAL_ENDINGS = [ "as", "os", "es" ] as const;
  static GENITIVE_PLURAL_ENDINGS = [ "arum", "orum", "um" ] as const;
  static DATIVE_PLURAL_ENDINGS = [ "is", "is", "ibus" ] as const;

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
    return this.#gender === "n" ? this.nominative_singular : `${this.#stem}${Noun.ACCUSATIVE_SINGULAR_ENDINGS[this.#declension - 1]}`;
  }

  get dative_singular() {
    return `${this.#stem}${Noun.DATIVE_SINGULAR_ENDINGS[this.#declension - 1]}`;
  }

  get ablative_singular() {
    return `${this.#stem}${Noun.ABLATIVE_SINGULAR_ENDINGS[this.#declension - 1]}`;
  }

  get nominative_plural() {
    return `${this.#stem}${this.#gender === "n" ? "a" : Noun.NOMINATIVE_PLURAL_ENDINGS[this.#declension - 1]}`;
  }

  get vocative_plural() {
    return this.nominative_plural;
  }

  get accusative_plural() {
    return this.#gender === "n" ? this.nominative_plural : `${this.#stem}${Noun.ACCUSATIVE_PLURAL_ENDINGS[this.#declension - 1]}`;
  }

  get genitive_plural() {
    return `${this.#stem}${Noun.GENITIVE_PLURAL_ENDINGS[this.#declension - 1]}`;
  }

  get dative_plural() {
    return `${this.#stem}${Noun.DATIVE_PLURAL_ENDINGS[this.#declension - 1]}`;
  }

  get ablative_plural() {
    return this.dative_plural;
  }
};
