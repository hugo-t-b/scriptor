# ✏️ scriptor 
[![Test workflow status](https://github.com/hugo-t-b/verba/actions/workflows/test-scriptor.yaml/badge.svg)](https://github.com/hugo-t-b/verba/actions/workflows/test-scriptor.yaml)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=eee)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-f9f1e1?logo=bun&logoColor=14151a)](https://bun.sh)
[![Zod](https://img.shields.io/badge/Zod-3068b7?logo=zod&logoColor=fff)](https://zod.dev)

> Decline and conjugate Latin nouns, verbs, adjectives, and adverbs.

* [Usage](#usage)
  * [Basic usage](#basic-usage)
  * [Return types](#return-types)
  * [I-stems and irregular forms](#i-stems-and-irregular-forms)
  * [Recursive usage](#recursive-usage)
* [Examples](#examples)
  * [Latin greetings](#latin-greetings)
  * [Creating a motto](#creating-a-motto)

## Usage
### Basic usage
Pass the principal parts of a word to `scriptor` as a string or array. It will automatically detect the word's part of speech.
```ts
import scriptor from "scriptor";

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

### Return types
The expected return type can be passed to `scriptor` as a generic for better intellisense.
```ts
import scriptor, { type Noun } from "scriptor";
const declined = scriptor<Noun>("scriptor, scriptoris, m");
```

### I-stems and irregular forms
A second, optional options argument can be used to specify whether a third declension noun is i-stem (`scriptor` can only automatically detect some neuter i-stems).
```ts
import scriptor from "scriptor";

const declined = scriptor("ars, artis, f", {
  iStem: true
});

console.log(declined.genitive.plural); //=> "artium"
```

To correctly decline/conjugate words that are generally regular with some irregular forms, the `overrides` option can be used. Forms that are not specified in `overrides` will not change.
```ts
import scriptor from "scriptor";

const conjugated = scriptor("duco, ducere, duxi, ductus", {
  overrides: { imperative: { active: { present: { singular: { second: "duc" } } } } }
});

console.log(conjugated.imperative.active.present.singular.second); //=> "duc"
console.log(conjugated.imperative.active.present.plural.second); //=> "ducite"
```

For words with irregular principle parts, use the creator function for the specific part of speech. The principal parts must be passed as an array without macrons. Many of the returned forms will be incorrect, however the `overrides` option can be used to increase their accuracy.
```ts
import createVerb from "scriptor/verbs";
const conjugated = createVerb([ "sum", "esse", "fui" ]);
```

### Recursive usage
Some of the forms that `scriptor` returns are the principal parts of a distinct derived word (e.g., participles, comparative and superlative adjectives, etc.). To access specific forms of these words, they must be passed back into `scriptor`.
```ts
import scriptor from "scriptor";

const conjugated = scriptor("scribo, scribere, scripsi, scriptus");
const ppp = conjugated.participle.passive.perfect;

console.log(ppp); //=> "scriptus, scripta, scriptum"

const declinedPPP = scriptor(ppp);
const nomMascSg = declinedPPP.nominative.masculine.singular;

console.log(nomMascSg); //=> "scriptus"
```

## Examples
### Latin greetings
```ts
import scriptor, { type Noun } from "scriptor";

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
import scriptor, { type Adjective } from "scriptor";

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
