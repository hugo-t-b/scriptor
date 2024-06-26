import { z } from "zod";

const tense = z.enum([ "present", "perfect", "imperfect", "pluperfect" ]);
const voice = z.enum([ "active", "passive" ]);

export const VerbForm = z.union([
  z.tuple([
    z.enum([ "1st", "2nd", "3rd" ]),
    z.enum([ "singular", "plural"]),
    tense,
    voice,
    z.enum([ "indicative", "subjunctive", "imperative" ])
  ]),

  z.tuple([
    tense,
    voice,
    z.enum([ "infinitive", "participle" ])
  ])
]);

const firstPP = z.string().endsWith("o");
const secondPP = z.string().endsWith("re");
const thirdPP = z.string().endsWith("i");
const fourthPP = z.string().endsWith("us");

export const VerbPrincipalParts = z.union([
  z.tuple([
    firstPP,
    secondPP,
    thirdPP,
    fourthPP
  ]),

  z.tuple([
    firstPP,
    secondPP,
    thirdPP
  ])
]);

export default class Verb {
  #principalParts: z.infer<typeof VerbPrincipalParts>;

  static DEFAULT_ENDINGS = ["m", "s", "t", "mus", "tis", "nt"];
  static PERFECT_ENDINGS = ["i", "isti", "it", "imus", "istis", "erunt"];

  constructor(principalParts: z.infer<typeof VerbPrincipalParts>) {
    this.#principalParts = principalParts;
  }

  get #presentStem() {
    return this.#principalParts[1].slice(0, -2);
  }

  get #perfectStem() {
    return this.#principalParts[2].slice(0, -1);
  }

  get #perfectPassiveStem() {
    return this.#principalParts[3]?.slice(0, -2) ?? null;
  }

  get #conjugation() {
    if (this.#presentStem.endsWith("a")) return 1;
    if (this.#presentStem.endsWith("i")) return 4;
    if (this.#principalParts[0].endsWith("eo")) return 2;
    
    return this.#principalParts[0].endsWith("io") ? 3.5 : 3;
  }

  get present_active_indicative() {
    const stem = Math.floor(this.#conjugation) === 3 ? `${this.#presentStem.slice(0, -1)}i` : this.#presentStem;

    return Verb.DEFAULT_ENDINGS
      .with(0, "o")
      .map((ending, index) => {
        if (index === 0 && (this.#conjugation === 1 || this.#conjugation === 3)) {
          return `${stem.slice(0, -1)}${ending}`;
        }

        if (index === 5 && this.#conjugation === 3) {
          return `${stem.slice(0, -1)}u${ending}`;
        }

        if (index === 5 && Math.ceil(this.#conjugation) === 4) {
          return `${stem}u${ending}`;
        }

        return `${stem}${ending}`;
      });
  }

  get perfect_active_indicative() {
    return Verb.PERFECT_ENDINGS.map(ending => `${this.#perfectStem}${ending}`);
  }

  get imperfect_active_indicative() {
    const stem = Math.ceil(this.#conjugation) === 4 ? `${this.#presentStem.slice(0, -1)}ie` : this.#presentStem;
    return Verb.DEFAULT_ENDINGS.map(ending => `${stem}ba${ending}`);
  }

  get pluperfect_active_indicative() {
    return Verb.DEFAULT_ENDINGS.map(ending => `${this.#perfectStem}era${ending}`);
  }

  get imperfect_active_subjunctive() {
    return Verb.DEFAULT_ENDINGS.map(ending => `${this.present_active_infinitive}${ending}`);
  }

  get pluperfect_active_subjunctive() {
    return Verb.DEFAULT_ENDINGS.map(ending => `${this.perfect_active_infinitive}${ending}`);
  }

  get present_active_imperative() {
    return [
      null,
      `${this.#presentStem}`,
      null,
      null,
      Math.floor(this.#conjugation) === 3 ? `${this.#presentStem.slice(0, -1)}ite` : `${this.#presentStem}te`,
      null
    ];
  }

  get present_active_infinitive() {
    return this.#principalParts[1];
  }

  get perfect_active_infinitive() {
    return `${this.#perfectStem}isse`;
  }

  get present_active_participle() {
    const stem = Math.ceil(this.#conjugation) === 4 ? `${this.#presentStem.slice(0, -1)}ie` : this.#presentStem;
    return `${stem}ns, ${stem}ntis`;
  }

  get perfect_passive_participle() {
    return this.#perfectPassiveStem ? `${this.#perfectPassiveStem}us, ${this.#perfectPassiveStem}a, ${this.#perfectPassiveStem}um` : null;
  }
};
