import type { Shape as VerbShape } from "./utils";

export const withoutPerfectPassiveStem = {
  indicative: {
    active: {
      present: {
        singular: {
          first: "{presentActiveIndicative}",
          second: "{presentStemA}s",
          third: "{presentStemA}t"
        },
        plural: {
          first: "{presentStemA}mus",
          second: "{presentStemA}tis",
          third: "{presentStemB}nt"
        }
      },
      perfect: {
        singular: {
          first: "{perfectStem}i",
          second: "{perfectStem}isti",
          third: "{perfectStem}it",
        },
        plural: {
          first: "{perfectStem}imus",
          second: "{perfectStem}istis",
          third: "{perfectStem}erunt",
        }
      },
      imperfect: {
        singular: {
          first: "{presentStemC}bam",
          second: "{presentStemC}bas",
          third: "{presentStemC}bat"
        },
        plural: {
          first: "{presentStemC}bamus",
          second: "{presentStemC}batis",
          third: "{presentStemC}bant"
        }
      },
      pluperfect: {
        singular: {
          first: "{perfectStem}eram",
          second: "{perfectStem}eras",
          third: "{perfectStem}erat"
        },
        plural: {
          first: "{perfectStem}eramus",
          second: "{perfectStem}eratis",
          third: "{perfectStem}erant"
        }
      }
    }
  },

  subjunctive: {
    active: {
      imperfect: {
        singular: {
          first: "{presentStem}rem",
          second: "{presentStem}res",
          third: "{presentStem}ret"
        },
        plural: {
          first: "{presentStem}remus",
          second: "{presentStem}retis",
          third: "{presentStem}rent"
        }
      },
      pluperfect: {
        singular: {
          first: "{perfectStem}issem",
          second: "{perfectStem}isses",
          third: "{perfectStem}isset"
        },
        plural: {
          first: "{perfectStem}issemus",
          second: "{perfectStem}issetis",
          third: "{perfectStem}issent"
        }
      }
    }
  },

  imperative: {
    active: {
      present: {
        singular: {
          second: "{presentStem}"
        },
        plural: {
          second: "{presentStemA}te"
        }
      }
    }
  },

  infinitive: {
    active: {
      present: "{presentStem}re",
      perfect: "{perfectStem}isse"
    }
  },

  participle: {
    active: {
      present: "{presentStemC}ns, {presentStemC}ntis"
    }
  }
} satisfies VerbShape;

export const withPerfectPassiveStem = {
  ...withoutPerfectPassiveStem,

  participle: {
    ...withoutPerfectPassiveStem.participle,

    passive: {
      perfect: "{perfectPassiveStem}us, {perfectPassiveStem}a, {perfectPassiveStem}um"
    }
  }
} satisfies VerbShape;
