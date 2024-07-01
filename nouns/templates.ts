import type { Shape as NounShape } from "./utils";

const firstDeclension = {
  nominative: {
    singular: "{nominativeSingular}",
    plural: "{stem}ae"
  },

  vocative: {
    singular: "{nominativeSingular}",
    plural: "{stem}ae"
  },

  accusative: {
    singular: "{stem}am",
    plural: "{stem}as"
  },

  genitive: {
    singular: "{stem}ae",
    plural: "{stem}arum"
  },

  dative: {
    singular: "{stem}ae",
    plural: "{stem}is"
  },

  ablative: {
    singular: "{stem}a",
    plural: "{stem}is"
  }
} satisfies NounShape;

const secondDeclensionMasculine = {
  nominative: {
    singular: "{nominativeSingular}",
    plural: "{stem}i"
  },

  vocative: {
    singular: "{vocativeSingular}",
    plural: "{stem}i"
  },

  accusative: {
    singular: "{stem}um",
    plural: "{stem}os"
  },

  genitive: {
    singular: "{stem}i",
    plural: "{stem}orum"
  },

  dative: {
    singular: "{stem}o",
    plural: "{stem}is"
  },

  ablative: {
    singular: "{stem}o",
    plural: "{stem}is"
  }
} satisfies NounShape;

const secondDeclensionNeuter = {
  ...secondDeclensionMasculine,

  nominative: {
    singular: "{nominativeSingular}",
    plural: "{stem}a"
  },

  vocative: {
    singular: "{nominativeSingular}",
    plural: "{stem}a"
  },

  accusative: {
    singular: "{nominativeSingular}",
    plural: "{stem}a"
  }
} satisfies NounShape;

const thirdDeclensionMasculineFeminine = {
  nominative: {
    singular: "{nominativeSingular}",
    plural: "{stem}es"
  },

  vocative: {
    singular: "{nominativeSingular}",
    plural: "{stem}es"
  },

  accusative: {
    singular: "{stem}em",
    plural: "{stem}es"
  },

  genitive: {
    singular: "{stem}is",
    plural: "{possibleIStem}um"
  },

  dative: {
    singular: "{stem}i",
    plural: "{stem}ibus"
  },

  ablative: {
    singular: "{stem}e",
    plural: "{stem}ibus"
  }
} satisfies NounShape;

const thirdDeclensionNeuter = {
  ...thirdDeclensionMasculineFeminine,

  nominative: {
    singular: "{nominativeSingular}",
    plural: "{possibleIStem}a"
  },

  vocative: {
    singular: "{nominativeSingular}",
    plural: "{possibleIStem}a"
  },

  accusative: {
    singular: "{nominativeSingular}",
    plural: "{possibleIStem}a"
  },

  ablative: {
    singular: "{ablativeSingular}",
    plural: "{stem}ibus"
  }
} satisfies NounShape;

export {
  firstDeclension,
  secondDeclensionMasculine,
  secondDeclensionNeuter,
  thirdDeclensionMasculineFeminine,
  thirdDeclensionNeuter
};
