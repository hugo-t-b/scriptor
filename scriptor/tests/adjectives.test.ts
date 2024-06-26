import { describe, expect, test } from "bun:test";
import scriptor from "..";

const acer = "acer, acris, acre";
const aeger = "aeger, aegra, aegrum";
const celer = "celer, celeris, celere";
const felix = "felix, felicis";
const fortis = "fortis, forte";
const ingens = "ingens, ingentis";
const laetissimus = "laetissimus, laetissima, laetissimum";
const laetus = "laetus, laeta, laetum";
const liber = "liber, libera, liberum";
const maior = "maior, maius";
const omnis = "omnis, omne";
const sapiens = "sapiens, sapientis";
const scribens = "scribens, scribentis";
const scriptus = "scriptus, scripta, scriptum";

describe("Masculine singular", () => {
  const repeated = ["masculine", "singular"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aeger");
    expect(scriptor(celer, ...form)).toBe("celer");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimus");
    expect(scriptor(liber, ...form)).toBe("liber");
    expect(scriptor(maior, ...form)).toBe("maior");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptus");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aeger");
    expect(scriptor(celer, ...form)).toBe("celer");
    expect(scriptor(laetissimus, ...form)).toBe("laetissime");
    expect(scriptor(liber, ...form)).toBe("liber");
    expect(scriptor(maior, ...form)).toBe("maior");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripte");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celerem");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimum");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(maior, ...form)).toBe("maiorem");
    expect(scriptor(omnis, ...form)).toBe("omnem");
    expect(scriptor(scribens, ...form)).toBe("scribentem");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimi");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(maior, ...form)).toBe("maioris");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimo");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(maior, ...form)).toBe("maiori");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimo");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(maior, ...form)).toBe("maiore");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });  
});

describe("Feminine singular", () => {
  const repeated = ["feminine", "singular"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maior");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maior");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegram");
    expect(scriptor(celer, ...form)).toBe("celerem");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimam");
    expect(scriptor(liber, ...form)).toBe("liberam");
    expect(scriptor(maior, ...form)).toBe("maiorem");
    expect(scriptor(omnis, ...form)).toBe("omnem");
    expect(scriptor(scribens, ...form)).toBe("scribentem");
    expect(scriptor(scriptus, ...form)).toBe("scriptam");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimae");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(maior, ...form)).toBe("maioris");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimae");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(maior, ...form)).toBe("maiori");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maiore");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
});

describe("Neuter singular", () => {
  const repeated = ["neuter", "singular"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimum");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(maior, ...form)).toBe("maius");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimum");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(maior, ...form)).toBe("maius");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimum");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(maior, ...form)).toBe("maius");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimi");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(maior, ...form)).toBe("maioris");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimo");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(maior, ...form)).toBe("maiori");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimo");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(maior, ...form)).toBe("maiore");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
});

describe("Masculine plural", () => {
  const repeated = ["masculine", "plural"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimi");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimi");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegros");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimos");
    expect(scriptor(liber, ...form)).toBe("liberos");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptos");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrorum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimorum");
    expect(scriptor(liber, ...form)).toBe("liberorum");
    expect(scriptor(maior, ...form)).toBe("maiorum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptorum");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});

describe("Feminine plural", () => {
  const repeated = ["feminine", "plural"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimae");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimae");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegras");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimas");
    expect(scriptor(liber, ...form)).toBe("liberas");
    expect(scriptor(maior, ...form)).toBe("maiores");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptas");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrarum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimarum");
    expect(scriptor(liber, ...form)).toBe("liberarum");
    expect(scriptor(maior, ...form)).toBe("maiorum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptarum");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});

describe("Neuter plural", () => {
  const repeated = ["neuter", "plural"];

  test("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maiora");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maiora");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(laetissimus, ...form)).toBe("laetissima");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(maior, ...form)).toBe("maiora");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrorum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimorum");
    expect(scriptor(liber, ...form)).toBe("liberorum");
    expect(scriptor(maior, ...form)).toBe("maiorum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptorum");
  });
  
  test("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(laetissimus, ...form)).toBe("laetissimis");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(maior, ...form)).toBe("maioribus");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});

test("Positive", () => {
  const form = "positive";

  expect(scriptor(acer, form)).toBe("acer, acris, acre");
  expect(scriptor(aeger, form)).toBe("aeger, aegra, aegrum");
  expect(scriptor(celer, form)).toBe("celer, celeris, celere");
  expect(scriptor(fortis, form)).toBe("fortis, forte");
  expect(scriptor(ingens, form)).toBe("ingens, ingentis");
  expect(scriptor(laetus, form)).toBe("laetus, laeta, laetum");
  expect(scriptor(liber, form)).toBe("liber, libera, liberum");
});

test("Comparative", () => {
  const form = "comparative";

  expect(scriptor(acer, form)).toBe("acrior, acrius");
  expect(scriptor(aeger, form)).toBe("aegrior, aegrius");
  expect(scriptor(celer, form)).toBe("celerior, celerius");
  expect(scriptor(fortis, form)).toBe("fortior, fortius");
  expect(scriptor(ingens, form)).toBe("ingentior, ingentius");
  expect(scriptor(laetus, form)).toBe("laetior, laetius");
  expect(scriptor(liber, form)).toBe("liberior, liberius");
});

test("Superlative", () => {
  const form = "superlative";

  expect(scriptor(acer, form)).toBe("acerrimus, acerrima, acerrimum");
  expect(scriptor(aeger, form)).toBe("aegerrimus, aegerrima, aegerrimum");
  expect(scriptor(celer, form)).toBe("celerrimus, celerrima, celerrimum");
  expect(scriptor("facilis, facile", form)).toBe("facillimus, facillima, facillimum");
  expect(scriptor(fortis, form)).toBe("fortissimus, fortissima, fortissimum");
  expect(scriptor(ingens, form)).toBe("ingentissimus, ingentissima, ingentissimum");
  expect(scriptor(laetus, form)).toBe("laetissimus, laetissima, laetissimum");
  expect(scriptor(liber, form)).toBe("liberrimus, liberrima, liberrimum");
});

test("Adverb", () => {
  const form = "adverb";

  expect(scriptor(acer, form)).toBe("acriter");
  expect(scriptor(aeger, form)).toBe("aegre");
  expect(scriptor(celer, form)).toBe("celeriter");
  expect(scriptor(felix, form)).toBe("feliciter");
  expect(scriptor(fortis, form)).toBe("fortiter");
  expect(scriptor(laetus, form)).toBe("laete");
  expect(scriptor(liber, form)).toBe("libere");
  expect(scriptor(sapiens, form)).toBe("sapienter");
});
