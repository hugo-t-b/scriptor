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

To correctly decline/conjugate words that are generally regular with some irregular forms, the `overrides` option can be used. Other forms will not change.
```ts
import scriptor from "scriptor";

const declined = scriptor("duco, ducere, duxi, ductus", {
  overrides: { imperative: { active: { present: { singular: { second: "duc" } } } } }
});

console.log(declined.imperative.active.present.singular.second); //=> "duc"
console.log(declined.imperative.active.present.plural.second); //=> "ducite"
```
