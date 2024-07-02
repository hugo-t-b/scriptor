# ✏️ scriptor 
[![JSR version](https://jsr.io/badges/@hugo-t-b/scriptor)](https://jsr.io/@hugo-t-b/scriptor)
[![Release workflow status](https://img.shields.io/github/actions/workflow/status/hugo-t-b/scriptor/.github%2Fworkflows%2Frelease.yaml?label=release)](https://github.com/hugo-t-b/scriptor/actions/workflows/release.yaml)
[![MIT license](https://img.shields.io/github/license/hugo-t-b/scriptor)](LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/hugo-t-b/scriptor)](https://github.com/hugo-t-b/scriptor/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=eee)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-f9f1e1?logo=bun&logoColor=14151a)](https://bun.sh)
[![Zod](https://img.shields.io/badge/Zod-3068b7?logo=zod&logoColor=fff)](https://zod.dev)

> Decline and conjugate Latin nouns, verbs, adjectives, and adverbs

- [📦 Installation](#-installation)
  - [Bun](#bun)
  - [Deno](#deno)
  - [Node](#node)
- [🚀 Usage](#-usage)
  - [Basic usage](#basic-usage)
  - [Return types](#return-types)
  - [I-stems and irregular forms](#i-stems-and-irregular-forms)
  - [Recursive usage](#recursive-usage)
- [🔥 Examples](#-examples)
  - [Latin greetings](#latin-greetings)
  - [Creating a motto](#creating-a-motto)
- [📃 Support](#-support)
  - [Nouns](#nouns)
  - [Verbs](#verbs)
  - [Adjectives](#adjectives)
  - [Adverbs](#adverbs)
 
## 📦 Installation
Install `scriptor` from [JSR](https://jsr.io/@hugo-t-b/scriptor) using one of the following commands.
### Bun
```sh
bunx jsr add @hugo-t-b/scriptor
```

### Deno
```sh
deno add @hugo-t-b/scriptor
```

### Node
```sh
npx jsr add @hugo-t-b/scriptor
yarn dlx jsr add @hugo-t-b/scriptor
pnpm dlx jsr add @hugo-t-b/scriptor
```

## 🚀 Usage
### Basic usage
Pass the principal parts of a word to `scriptor` as a string or array. It will automatically detect the word's part of speech.
```ts
import scriptor from "@hugo-t-b/scriptor";

const fromString = scriptor("scriptor, scriptoris, m"); // Principal parts string
const fromArray = scriptor([ "scriptor", "scriptoris", "m" ]); // Principal parts array
```

`scriptor` will return an object with every (supported) form of the word, which can be traversed to obtain individual forms.
```ts
{
  nominative: {
    singular: "scriptor",
    plural: "scriptores"
  },
  vocative: {
    singular: "scriptor",
    plural: "scriptores"
  },
  accusative: {
    singular: "scriptorem",
    plural: "scriptores"
  },
  ...
}
```

> [!TIP]
> The full list of supported forms and principal parts can be found in the [support](#support) section.

### Return types
The expected return type can be passed to `scriptor` as a generic for better intellisense.
```ts
import scriptor, { type Noun } from "@hugo-t-b/scriptor";
const declined = scriptor<Noun>("scriptor, scriptoris, m");
```

### I-stems and irregular forms
An optional options argument can be used to specify whether a third declension noun is i-stem (`scriptor` can only automatically detect some neuter i-stems).
```ts
import scriptor from "@hugo-t-b/scriptor";

const declined = scriptor("ars, artis, f", {
  iStem: true
});

console.log(declined.genitive.plural); //=> "artium"
```

To correctly decline/conjugate words that are generally regular with some irregular forms, the `overrides` option can be used. Forms that are not specified in `overrides` will not change.
```ts
import scriptor from "@hugo-t-b/scriptor";

const conjugated = scriptor("duco, ducere, duxi, ductus", {
  overrides: { imperative: { active: { present: { singular: { second: "duc" } } } } }
});

console.log(conjugated.imperative.active.present.singular.second); //=> "duc"
console.log(conjugated.imperative.active.present.plural.second); //=> "ducite"
```

For words with irregular principle parts, use the creator function for the specific part of speech. The principal parts must be passed as an array without macrons. Many of the returned forms will be incorrect, however the `overrides` option can be used to increase their accuracy.
```ts
import createVerb from "@hugo-t-b/scriptor/verbs";
const conjugated = createVerb([ "sum", "esse", "fui" ]);
```

### Recursive usage
Some of the forms that `scriptor` returns are the principal parts of a distinct derived word (e.g., participles, comparative and superlative adjectives, etc.). To access specific forms of these words, they must be passed back to `scriptor`.
```ts
import scriptor from "@hugo-t-b/scriptor";

const conjugated = scriptor("scribo, scribere, scripsi, scriptus");
const ppp = conjugated.participle.passive.perfect;

console.log(ppp); //=> "scriptus, scripta, scriptum"

const declinedPPP = scriptor(ppp);
const nomMascSg = declinedPPP.nominative.masculine.singular;

console.log(nomMascSg); //=> "scriptus"
```

## 🔥 Examples
### Latin greetings
```ts
import scriptor, { type Noun } from "@hugo-t-b/scriptor";

const greet = (name: string) => {
  const declinedName = scriptor<Noun>(name);
  const vocative = declinedName.vocative?.singular;
  return `salve, ${vocative}!`;
}

console.log(greet("Gaius, Gaii, m")); //=> "salve, Gai!"
console.log(greet("Metella, Metellae, f")); //=> "salve, Metella!"
console.log(greet("Marcus, Marci, m")); //=> "salve, Marce!"
```

### Creating a motto
```ts
import scriptor, { type Adjective } from "@hugo-t-b/scriptor";

const makeMotto = (...qualities: string[]) => {
  return qualities
    .map(principalParts => scriptor<Adjective>(principalParts).comparative!)
    .map(comparative => scriptor<Adjective>(comparative).nominative?.neuter?.singular!)
    .join(", ");
};

console.log(makeMotto("citus, cita, citum", "altus, alta, altum", "fortis, forte"));
  //=> "citius, altius, fortius" (faster, higher, stronger)

console.log(makeMotto("callidus, callida, callidum", "sapiens, sapientis", "prudens, prudentis"));
  //=> "callidius, sapientius, prudentius" (smarter, wiser, more prudent)
```

## 📃 Support
### Nouns
#### Principal parts
1. Nominative singular
2. Genitive singular
3. Gender (`m`, `f` or `n`)

#### Declensions
|  | 1st | 2nd | 3rd | 4th | 5th |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Masc./fem. | ✅ | ✅ | ✅ | ❌ | ❌ |
| Neuter | 🚫 | ✅ | ✅ | ❌ | 🚫 |

#### Cases
| Nominative | Vocative | Accusative | Genitive | Dative | Ablative |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Verbs
#### Principal parts
1. Present active indicative first person singular
2. Present active infinitive
3. Perfect active indicative first person singular
4. Perfect passive participle nominative masculine singular (optional)

> [!WARNING]
> A verb's supine is not supported as the 4th principal part. Always use its perfect passive participle instead.

#### Conjugations
| 1st | 2nd | 3rd | 3rd (-io) | 4th |
| :---: | :---: | :---: | :---: | :---: |
| ✅ | ✅ | ✅ | ✅ | ✅ |

#### Indicatives
|  | Present | Imperfect | Future | Perfect | Pluperfect | Future perfect |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Active | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Passive | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

#### Subjunctives
|  | Present | Imperfect | Perfect | Pluperfect |
| :--- | :---: | :---: | :---: | :---: |
| Active | ❌ | ✅ | ❌ | ✅ |
| Passive | ❌ | ❌ | ❌ | ❌ |

#### Imperatives
|  | Present | Future |
| :--- | :---: | :---: |
| Active | ✅ | ❌ |
| Passive | ❌ | ❌ |

#### Infinitives
|  | Present | Perfect | Future |
| :--- | :---: | :---: | :---: |
| Active | ✅ | ✅ | ❌ |
| Passive | ❌ | ❌ | ❌ |

#### Participles
|  | Present | Perfect | Future |
| :--- | :---: | :---: | :---: |
| Active | ✅ | 🚫 | ❌ |
| Passive | 🚫 | ✅ | ❌ |

### Adjectives
#### Principal parts
The principal parts of an adjective vary based on the pattern it follows. The following examples are all valid:
- _bonus, bona, bonum_
- _fortis, forte_
- _ingens, ingentis_
- _celer, celeris, celere_

#### Supported forms
|  | Nominative | Vocative | Accusative | Genitive | Dative | Ablative |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Masculine | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Feminine | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Neuter | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

| Positive | Comparative | Superlative | Adverb 
| :---: | :---: | :---: | :---: |
| ✅ | ✅ | ✅ | ✅ |

### Adverbs
The only principal part for an adverb is its **positive** (normal) form.

#### Supported forms
| Positive | Comparative | Superlative | 
| :---: | :---: | :---: |
| ✅ | ✅ | ✅ |
