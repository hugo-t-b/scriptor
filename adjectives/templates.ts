import type { Shape as AdjectiveShape } from "./utils";

const patternA = {
  nominative: {
    masculine: {
      singular: "{nominativeMasculineSingular}",
      plural: "{stem}i"
    },
    feminine: {
      singular: "{stem}a",
      plural: "{stem}ae"
    },
    neuter: {
      singular: "{stem}um",
      plural: "{stem}a"
    }
  },

  vocative: {
    masculine: {
      singular: "{vocativeMasculineSingular}",
      plural: "{stem}i"
    },
    feminine: {
      singular: "{stem}a",
      plural: "{stem}ae"
    },
    neuter: {
      singular: "{stem}um",
      plural: "{stem}a"
    }
  },

  accusative: {
    masculine: {
      singular: "{stem}um",
      plural: "{stem}os"
    },
    feminine: {
      singular: "{stem}am",
      plural: "{stem}as"
    },
    neuter: {
      singular: "{stem}um",
      plural: "{stem}a"
    }
  },

  genitive: {
    masculine: {
      singular: "{stem}i",
      plural: "{stem}orum"
    },
    feminine: {
      singular: "{stem}ae",
      plural: "{stem}arum"
    },
    neuter: {
      singular: "{stem}i",
      plural: "{stem}orum"
    }
  },

  dative: {
    masculine: {
      singular: "{stem}o",
      plural: "{stem}is"
    },
    feminine: {
      singular: "{stem}ae",
      plural: "{stem}is"
    },
    neuter: {
      singular: "{stem}o",
      plural: "{stem}is"
    }
  },
  
  ablative: {
    masculine: {
      singular: "{stem}o",
      plural: "{stem}is"
    },
    feminine: {
      singular: "{stem}a",
      plural: "{stem}is"
    },
    neuter: {
      singular: "{stem}o",
      plural: "{stem}is"
    }
  },

  positive: "{nominativeMasculineSingular}, {stem}a, {stem}um",
  comparative: "{stem}ior, {stem}ius",
  superlative: "{superlativeStem}us, {superlativeStem}a, {superlativeStem}um",
  adverb: "{stem}e"
} satisfies AdjectiveShape;

const patternBCD = {
  nominative: {
    masculine: {
      singular: "{nominativeMasculineSingular}",
      plural: "{stem}es"
    },
    feminine: {
      singular: "{nominativeFeminineSingular}",
      plural: "{stem}es"
    },
    neuter: {
      singular: "{nominativeNeuterSingular}",
      plural: "{possibleIStem}a"
    }
  },
  
  vocative: {
    masculine: {
      singular: "{nominativeMasculineSingular}",
      plural: "{stem}es"
    },
    feminine: {
      singular: "{nominativeFeminineSingular}",
      plural: "{stem}es"
    },
    neuter: {
      singular: "{nominativeNeuterSingular}",
      plural: "{possibleIStem}a"
    }
  },

  accusative: {
    masculine: {
      singular: "{stem}em",
      plural: "{stem}es"
    },
    feminine: {
      singular: "{stem}em",
      plural: "{stem}es"
    },
    neuter: {
      singular: "{nominativeNeuterSingular}",
      plural: "{possibleIStem}a"
    }
  },

  genitive: {
    masculine: {
      singular: "{stem}is",
      plural: "{possibleIStem}um"
    },
    feminine: {
      singular: "{stem}is",
      plural: "{possibleIStem}um"
    },
    neuter: {
      singular: "{stem}is",
      plural: "{possibleIStem}um"
    }
  },

  dative: {
    masculine: {
      singular: "{stem}i",
      plural: "{stem}ibus"
    },
    feminine: {
      singular: "{stem}i",
      plural: "{stem}ibus"
    },
    neuter: {
      singular: "{stem}i",
      plural: "{stem}ibus"
    }
  },

  ablative: {
    masculine: {
      singular: "{ablativeSingular}",
      plural: "{stem}ibus"
    },
    feminine: {
      singular: "{ablativeSingular}",
      plural: "{stem}ibus"
    },
    neuter: {
      singular: "{ablativeSingular}",
      plural: "{stem}ibus"
    }
  },

  positive: "{positive}",
  comparative: "{stem}ior, {stem}ius",
  superlative: "{superlativeStem}us, {superlativeStem}a, {superlativeStem}um",
  adverb: "{adverb}"
} satisfies AdjectiveShape;

export {
  patternA,
  patternBCD
};
