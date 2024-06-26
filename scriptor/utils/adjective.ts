import { z } from "zod";

export const AdjectiveForm = z.union([
  z.tuple([
    z.enum([ "nominative", "vocative", "accusative", "genitive", "dative", "ablative" ]),
    z.enum([ "feminine", "masculine", "neuter" ]),
    z.enum([ "singular", "plural" ])
  ]),

  z.tuple([
    z.enum([ "positive", "comparative", "superlative", "adverb" ])
  ])
]);

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

export const AdjectivePrincipalParts = z.union([ PatternA, PatternB, PatternC, PatternD ]);

export default class Adjective {
  #principalParts: z.infer<typeof AdjectivePrincipalParts>;

  constructor(principalParts: z.infer<typeof AdjectivePrincipalParts>) {
    this.#principalParts = principalParts;
  }

  get #pattern() {
    if (PatternA.safeParse(this.#principalParts).success) return "A";
    if (PatternD.safeParse(this.#principalParts).success) return "D";
    if (PatternB.safeParse(this.#principalParts).success) return "B";
    else return "C";
  }

  get #stem() {
    let part = this.#principalParts[1];

    if (this.#pattern === "A") part = this.#principalParts[2]!;

    if (this.#pattern === "B") {
      if (this.#principalParts[0].endsWith("is")) part = this.#principalParts[0];
      else return this.#principalParts[0];
    }

    return part.slice(0, -2);
  }

  get #isIStem() {
    return this.#pattern !== "B" || !this.#stem.endsWith("or");
  }

  get nominative_masculine_singular() {
    return this.#principalParts[0];
  }

  get nominative_feminine_singular() {
    return this.#pattern === "A" || this.#pattern === "D" ? this.#principalParts[1] : this.nominative_masculine_singular;
  }

  get nominative_neuter_singular() {
    if (this.#pattern === "B") return this.#principalParts[1];
    return this.#pattern === "C" ? this.nominative_masculine_singular : this.#principalParts[2]!;
  }

  get nominative_masculine_plural() {
    return `${this.#stem}${this.#pattern === "A" ? "i" : "es"}`;
  }

  get nominative_feminine_plural() {
    return this.#pattern === "A" ? `${this.#stem}ae` : this.nominative_masculine_plural;
  }

  get nominative_neuter_plural() {
    return `${this.#stem}${this.#pattern === "A" || !this.#isIStem ? "a" : "ia"}`;
  }

  get vocative_masculine_singular() {
    return this.#pattern === "A" && this.nominative_masculine_singular.endsWith("us") ? `${this.#stem}e` : this.nominative_masculine_singular;
  }

  get vocative_feminine_singular() {
    return this.nominative_feminine_singular;
  }

  get vocative_neuter_singular() {
    return this.nominative_neuter_singular;
  }

  get vocative_masculine_plural() {
    return this.nominative_masculine_plural;
  }

  get vocative_feminine_plural() {
    return this.nominative_feminine_plural;
  }

  get vocative_neuter_plural() {
    return this.nominative_neuter_plural;
  }

  get accusative_masculine_singular() {
    return `${this.#stem}${this.#pattern === "A" ? "um" : "em"}`;
  }

  get accusative_feminine_singular() {
    return this.#pattern === "A" ? `${this.#stem}am` : this.accusative_masculine_singular;
  }

  get accusative_neuter_singular() {
    return this.nominative_neuter_singular;
  }

  get accusative_masculine_plural() {
    return `${this.#stem}${this.#pattern === "A" ? "os" : "es"}`;
  }

  get accusative_feminine_plural() {
    return this.#pattern === "A" ? `${this.#stem}as` : this.accusative_masculine_plural;
  }

  get accusative_neuter_plural() {
    return this.nominative_neuter_plural;
  }

  get genitive_masculine_singular() {
    return `${this.#stem}${this.#pattern === "A" ? "i" : "is"}`;
  }

  get genitive_feminine_singular() {
    return this.#pattern === "A" ? `${this.#stem}ae` : this.genitive_masculine_singular;
  }

  get genitive_neuter_singular() {
    return this.genitive_masculine_singular;
  }

  get genitive_masculine_plural() {
    if (this.#pattern === "A") return `${this.#stem}orum`;
    return this.#isIStem ? `${this.#stem}ium` : `${this.#stem}um`;
  }

  get genitive_feminine_plural() {
    return this.#pattern === "A" ? `${this.#stem}arum` : this.genitive_masculine_plural;
  }

  get genitive_neuter_plural() {
    return this.genitive_masculine_plural;
  }

  get dative_masculine_singular() {
    return `${this.#stem}${this.#pattern === "A" ? "o" : "i"}`;
  }

  get dative_feminine_singular() {
    return this.#pattern === "A" ? `${this.#stem}ae` : this.dative_masculine_singular;
  }

  get dative_neuter_singular() {
    return this.dative_masculine_singular;
  }

  get dative_masculine_plural() {
    return `${this.#stem}${this.#pattern === "A" ? "is" : "ibus"}`;
  }

  get dative_feminine_plural() {
    return this.dative_masculine_plural;
  }

  get dative_neuter_plural() {
    return this.dative_masculine_plural;
  }

  get ablative_masculine_singular() {
    return this.#isIStem ? this.dative_masculine_singular : `${this.#stem}e`;
  }

  get ablative_feminine_singular() {
    return this.#pattern === "A" ? `${this.#stem}a` : this.ablative_masculine_singular;
  }

  get ablative_neuter_singular() {
    return this.ablative_masculine_singular;
  }

  get ablative_masculine_plural() {
    return this.dative_masculine_plural;
  }

  get ablative_feminine_plural() {
    return this.dative_feminine_plural;
  }

  get ablative_neuter_plural() {
    return this.ablative_masculine_plural;
  }

  get positive() {
    return this.#principalParts.join(", ");
  }

  get comparative() {
    return `${this.#stem}ior, ${this.#stem}ius`;
  }

  get superlative() {
    if (this.nominative_masculine_singular.endsWith("er")) {
      return `${this.nominative_masculine_singular}rimus, ${this.nominative_masculine_singular}rima, ${this.nominative_masculine_singular}rimum`;
    }

    return this.#stem.endsWith("er")
      ? `${this.#stem}rimus, ${this.#stem}rima, ${this.#stem}rimum`
      : `${this.#stem}issimus, ${this.#stem}issima, ${this.#stem}issimum`
  }

  get adverb() {
    if (this.#pattern === "A") return `${this.#stem}e`;
    return this.#stem.endsWith("nt") ? `${this.#stem}er` : `${this.#stem}iter`;
  }
};
