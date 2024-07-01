import { describe, expect, test } from "bun:test";
import scriptor, { type Adjective } from "..";

const acer = scriptor<Adjective>("acer, acris, acre");
const aeger = scriptor<Adjective>("aeger, aegra, aegrum");
const celer = scriptor<Adjective>("celer, celeris, celere");
const felix = scriptor<Adjective>("felix, felicis");
const fortis = scriptor<Adjective>("fortis, forte");
const ingens = scriptor<Adjective>("ingens, ingentis");
const laetissimus = scriptor<Adjective>("laetissimus, laetissima, laetissimum");
const laetus = scriptor<Adjective>("laetus, laeta, laetum");
const liber = scriptor<Adjective>("liber, libera, liberum");
const maior = scriptor<Adjective>("maior, maius");
const omnis = scriptor<Adjective>("omnis, omne");
const sapiens = scriptor<Adjective>("sapiens, sapientis");
const scribens = scriptor<Adjective>("scribens, scribentis");
const scriptus = scriptor<Adjective>("scriptus, scripta, scriptum");

describe("Nominative", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.nominative?.masculine?.singular;

    expect(find(aeger)).toBe("aeger");
    expect(find(celer)).toBe("celer");
    expect(find(laetissimus)).toBe("laetissimus");
    expect(find(liber)).toBe("liber");
    expect(find(maior)).toBe("maior");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scriptus");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.nominative?.feminine?.singular;
      
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeris");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maior");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scripta");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.nominative?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegrum");
    expect(find(celer)).toBe("celere");
    expect(find(laetissimus)).toBe("laetissimum");
    expect(find(liber)).toBe("liberum");
    expect(find(maior)).toBe("maius");
    expect(find(omnis)).toBe("omne");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scriptum");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.nominative?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegri");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimi");
    expect(find(liber)).toBe("liberi");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scripti");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.nominative?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegrae");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimae");
    expect(find(liber)).toBe("liberae");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scriptae");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.nominative?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeria");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maiora");
    expect(find(omnis)).toBe("omnia");
    expect(find(scribens)).toBe("scribentia");
    expect(find(scriptus)).toBe("scripta");
  });
});

describe("Vocative", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.vocative?.masculine?.singular;
  
    expect(find(aeger)).toBe("aeger");
    expect(find(celer)).toBe("celer");
    expect(find(laetissimus)).toBe("laetissime");
    expect(find(liber)).toBe("liber");
    expect(find(maior)).toBe("maior");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scripte");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.vocative?.feminine?.singular;
  
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeris");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maior");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scripta");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.vocative?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegrum");
    expect(find(celer)).toBe("celere");
    expect(find(laetissimus)).toBe("laetissimum");
    expect(find(liber)).toBe("liberum");
    expect(find(maior)).toBe("maius");
    expect(find(omnis)).toBe("omne");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scriptum");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.vocative?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegri");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimi");
    expect(find(liber)).toBe("liberi");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scripti");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.vocative?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegrae");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimae");
    expect(find(liber)).toBe("liberae");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scriptae");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.vocative?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeria");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maiora");
    expect(find(omnis)).toBe("omnia");
    expect(find(scribens)).toBe("scribentia");
    expect(find(scriptus)).toBe("scripta");
  });
});

describe("Accusative", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.accusative?.masculine?.singular;

    expect(find(aeger)).toBe("aegrum");
    expect(find(celer)).toBe("celerem");
    expect(find(laetissimus)).toBe("laetissimum");
    expect(find(liber)).toBe("liberum");
    expect(find(maior)).toBe("maiorem");
    expect(find(omnis)).toBe("omnem");
    expect(find(scribens)).toBe("scribentem");
    expect(find(scriptus)).toBe("scriptum");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.accusative?.feminine?.singular;
  
    expect(find(aeger)).toBe("aegram");
    expect(find(celer)).toBe("celerem");
    expect(find(laetissimus)).toBe("laetissimam");
    expect(find(liber)).toBe("liberam");
    expect(find(maior)).toBe("maiorem");
    expect(find(omnis)).toBe("omnem");
    expect(find(scribens)).toBe("scribentem");
    expect(find(scriptus)).toBe("scriptam");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.accusative?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegrum");
    expect(find(celer)).toBe("celere");
    expect(find(laetissimus)).toBe("laetissimum");
    expect(find(liber)).toBe("liberum");
    expect(find(maior)).toBe("maius");
    expect(find(omnis)).toBe("omne");
    expect(find(scribens)).toBe("scribens");
    expect(find(scriptus)).toBe("scriptum");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.accusative?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegros");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimos");
    expect(find(liber)).toBe("liberos");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scriptos");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.accusative?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegras");
    expect(find(celer)).toBe("celeres");
    expect(find(laetissimus)).toBe("laetissimas");
    expect(find(liber)).toBe("liberas");
    expect(find(maior)).toBe("maiores");
    expect(find(omnis)).toBe("omnes");
    expect(find(scribens)).toBe("scribentes");
    expect(find(scriptus)).toBe("scriptas");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.accusative?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeria");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maiora");
    expect(find(omnis)).toBe("omnia");
    expect(find(scribens)).toBe("scribentia");
    expect(find(scriptus)).toBe("scripta");
  });
});

describe("Genitive", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.genitive?.masculine?.singular;
  
    expect(find(aeger)).toBe("aegri");
    expect(find(celer)).toBe("celeris");
    expect(find(laetissimus)).toBe("laetissimi");
    expect(find(liber)).toBe("liberi");
    expect(find(maior)).toBe("maioris");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribentis");
    expect(find(scriptus)).toBe("scripti");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.genitive?.feminine?.singular;
  
    expect(find(aeger)).toBe("aegrae");
    expect(find(celer)).toBe("celeris");
    expect(find(laetissimus)).toBe("laetissimae");
    expect(find(liber)).toBe("liberae");
    expect(find(maior)).toBe("maioris");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribentis");
    expect(find(scriptus)).toBe("scriptae");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.genitive?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegri");
    expect(find(celer)).toBe("celeris");
    expect(find(laetissimus)).toBe("laetissimi");
    expect(find(liber)).toBe("liberi");
    expect(find(maior)).toBe("maioris");
    expect(find(omnis)).toBe("omnis");
    expect(find(scribens)).toBe("scribentis");
    expect(find(scriptus)).toBe("scripti");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.genitive?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegrorum");
    expect(find(celer)).toBe("celerium");
    expect(find(laetissimus)).toBe("laetissimorum");
    expect(find(liber)).toBe("liberorum");
    expect(find(maior)).toBe("maiorum");
    expect(find(omnis)).toBe("omnium");
    expect(find(scribens)).toBe("scribentium");
    expect(find(scriptus)).toBe("scriptorum");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.genitive?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegrarum");
    expect(find(celer)).toBe("celerium");
    expect(find(laetissimus)).toBe("laetissimarum");
    expect(find(liber)).toBe("liberarum");
    expect(find(maior)).toBe("maiorum");
    expect(find(omnis)).toBe("omnium");
    expect(find(scribens)).toBe("scribentium");
    expect(find(scriptus)).toBe("scriptarum");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.genitive?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegrorum");
    expect(find(celer)).toBe("celerium");
    expect(find(laetissimus)).toBe("laetissimorum");
    expect(find(liber)).toBe("liberorum");
    expect(find(maior)).toBe("maiorum");
    expect(find(omnis)).toBe("omnium");
    expect(find(scribens)).toBe("scribentium");
    expect(find(scriptus)).toBe("scriptorum");
  });
});

describe("Dative", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.dative?.masculine?.singular;

    expect(find(aeger)).toBe("aegro");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissimo");
    expect(find(liber)).toBe("libero");
    expect(find(maior)).toBe("maiori");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scripto");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.dative?.feminine?.singular;
  
    expect(find(aeger)).toBe("aegrae");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissimae");
    expect(find(liber)).toBe("liberae");
    expect(find(maior)).toBe("maiori");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scriptae");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.dative?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegro");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissimo");
    expect(find(liber)).toBe("libero");
    expect(find(maior)).toBe("maiori");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scripto");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.dative?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.dative?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.dative?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });
});

describe("Ablative", () => {
  test("Masculine singular", () => {
    const find = (adjective: Adjective) => adjective.ablative?.masculine?.singular;

    expect(find(aeger)).toBe("aegro");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissimo");
    expect(find(liber)).toBe("libero");
    expect(find(maior)).toBe("maiore");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scripto");
  });

  test("Feminine singular", () => {
    const find = (adjective: Adjective) => adjective.ablative?.feminine?.singular;
  
    expect(find(aeger)).toBe("aegra");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissima");
    expect(find(liber)).toBe("libera");
    expect(find(maior)).toBe("maiore");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scripta");
  });

  test("Neuter singular", () => {
    const find = (adjective: Adjective) => adjective.ablative?.neuter?.singular;
  
    expect(find(aeger)).toBe("aegro");
    expect(find(celer)).toBe("celeri");
    expect(find(laetissimus)).toBe("laetissimo");
    expect(find(liber)).toBe("libero");
    expect(find(maior)).toBe("maiore");
    expect(find(omnis)).toBe("omni");
    expect(find(scribens)).toBe("scribenti");
    expect(find(scriptus)).toBe("scripto");
  });

  test("Masculine plural", () => {
    const find = (adjective: Adjective) => adjective.ablative?.masculine?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });

  test("Feminine plural", () => {
    const find = (adjective: Adjective) => adjective.ablative?.feminine?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });

  test("Neuter plural", () => {
    const find = (adjective: Adjective) => adjective.ablative?.neuter?.plural;
  
    expect(find(aeger)).toBe("aegris");
    expect(find(celer)).toBe("celeribus");
    expect(find(laetissimus)).toBe("laetissimis");
    expect(find(liber)).toBe("liberis");
    expect(find(maior)).toBe("maioribus");
    expect(find(omnis)).toBe("omnibus");
    expect(find(scribens)).toBe("scribentibus");
    expect(find(scriptus)).toBe("scriptis");
  });
});

test("Positive", () => {
  expect(acer.positive).toBe("acer, acris, acre");
  expect(aeger.positive).toBe("aeger, aegra, aegrum");
  expect(celer.positive).toBe("celer, celeris, celere");
  expect(fortis.positive).toBe("fortis, forte");
  expect(ingens.positive).toBe("ingens, ingentis");
  expect(laetus.positive).toBe("laetus, laeta, laetum");
  expect(liber.positive).toBe("liber, libera, liberum");
});

test("Comparative", () => {
  expect(acer.comparative).toBe("acrior, acrius");
  expect(aeger.comparative).toBe("aegrior, aegrius");
  expect(celer.comparative).toBe("celerior, celerius");
  expect(fortis.comparative).toBe("fortior, fortius");
  expect(ingens.comparative).toBe("ingentior, ingentius");
  expect(laetus.comparative).toBe("laetior, laetius");
  expect(liber.comparative).toBe("liberior, liberius");
});

test("Superlative", () => {
  expect(acer.superlative).toBe("acerrimus, acerrima, acerrimum");
  expect(aeger.superlative).toBe("aegerrimus, aegerrima, aegerrimum");
  expect(celer.superlative).toBe("celerrimus, celerrima, celerrimum");
  expect((scriptor("facilis, facile") as Adjective).superlative).toBe("facillimus, facillima, facillimum");
  expect(fortis.superlative).toBe("fortissimus, fortissima, fortissimum");
  expect(ingens.superlative).toBe("ingentissimus, ingentissima, ingentissimum");
  expect(laetus.superlative).toBe("laetissimus, laetissima, laetissimum");
  expect(liber.superlative).toBe("liberrimus, liberrima, liberrimum");
});

test("Adverb", () => {
  expect(acer.adverb).toBe("acriter");
  expect(aeger.adverb).toBe("aegre");
  expect(celer.adverb).toBe("celeriter");
  expect(felix.adverb).toBe("feliciter");
  expect(fortis.adverb).toBe("fortiter");
  expect(laetus.adverb).toBe("laete");
  expect(liber.adverb).toBe("libere");
  expect(sapiens.adverb).toBe("sapienter");
});
