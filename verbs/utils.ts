import { z } from "zod";

type Mood = "imperative" | "indicative" | "subjunctive";
type Form = "infinitive" | "participle";
type GrammaticalNumber = "singular" | "plural";
type Person = "first" | "second" | "third";
type Tense = "future" | "imperfect" | "perfect" | "pluperfect" | "present";
type Voice = "active" | "passive";

export type Shape = {
  [mood in Mood]?: {
    [voice in Voice]?: {
      [tense in Tense]?: {
        [grammaticalNumber in GrammaticalNumber]?: {
          [person in Person]?: string
        }
      }
    }
  }
} & {
  [form in Form]?: {
    [voice in Voice]?: {
      [tense in Tense]?: string;
    }
  }
};

const FirstPP = z.string().endsWith("o");
const SecondPP = z.string().endsWith("re");
const ThirdPP = z.string().endsWith("i");
const FourthPP = z.string().endsWith("us");

export const PrincipalParts = z.union([
  z.tuple([
    FirstPP,
    SecondPP,
    ThirdPP,
    FourthPP
  ]),

  z.tuple([
    FirstPP,
    SecondPP,
    ThirdPP
  ])
]);

export const getConjugation = ([ presentActiveIndicative, presentActiveInfinitive ]: z.infer<typeof PrincipalParts>) => {
  if (presentActiveInfinitive.endsWith("are")) return 1;
  if (presentActiveInfinitive.endsWith("ire")) return 4;
  if (presentActiveIndicative.endsWith("eo")) return 2;
    
  return presentActiveIndicative.endsWith("io") ? 3.5 : 3;
};
