import { describe, expect, test } from "bun:test";
import scriptor from "..";

const aeger = "aeger, aegra, aegrum";
const celer = "celer, celeris, celere";
const liber = "liber, libera, liberum";
const omnis = "omnis, omne";
const scribens = "scribens, scribentis";
const scriptus = "scriptus, scripta, scriptum";

describe("Masculine singular", () => {
  const repeated = ["masculine", "singular"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aeger");
    expect(scriptor(celer, ...form)).toBe("celer");
    expect(scriptor(liber, ...form)).toBe("liber");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptus");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aeger");
    expect(scriptor(celer, ...form)).toBe("celer");
    expect(scriptor(liber, ...form)).toBe("liber");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripte");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celerem");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(omnis, ...form)).toBe("omnem");
    expect(scriptor(scribens, ...form)).toBe("scribentem");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });  
});

describe("Feminine singular", () => {
  const repeated = ["feminine", "singular"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegram");
    expect(scriptor(celer, ...form)).toBe("celerem");
    expect(scriptor(liber, ...form)).toBe("liberam");
    expect(scriptor(omnis, ...form)).toBe("omnem");
    expect(scriptor(scribens, ...form)).toBe("scribentem");
    expect(scriptor(scriptus, ...form)).toBe("scriptam");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
});

describe("Neuter singular", () => {
  const repeated = ["neuter", "singular"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrum");
    expect(scriptor(celer, ...form)).toBe("celere");
    expect(scriptor(liber, ...form)).toBe("liberum");
    expect(scriptor(omnis, ...form)).toBe("omne");
    expect(scriptor(scribens, ...form)).toBe("scribens");
    expect(scriptor(scriptus, ...form)).toBe("scriptum");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeris");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(omnis, ...form)).toBe("omnis");
    expect(scriptor(scribens, ...form)).toBe("scribentis");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegro");
    expect(scriptor(celer, ...form)).toBe("celeri");
    expect(scriptor(liber, ...form)).toBe("libero");
    expect(scriptor(omnis, ...form)).toBe("omni");
    expect(scriptor(scribens, ...form)).toBe("scribenti");
    expect(scriptor(scriptus, ...form)).toBe("scripto");
  });
});

describe("Masculine plural", () => {
  const repeated = ["masculine", "plural"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegri");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberi");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scripti");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegros");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberos");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptos");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrorum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(liber, ...form)).toBe("liberorum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptorum");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});

describe("Feminine plural", () => {
  const repeated = ["feminine", "plural"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrae");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberae");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptae");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegras");
    expect(scriptor(celer, ...form)).toBe("celeres");
    expect(scriptor(liber, ...form)).toBe("liberas");
    expect(scriptor(omnis, ...form)).toBe("omnes");
    expect(scriptor(scribens, ...form)).toBe("scribentes");
    expect(scriptor(scriptus, ...form)).toBe("scriptas");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrarum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(liber, ...form)).toBe("liberarum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptarum");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});

describe("Neuter plural", () => {
  const repeated = ["neuter", "plural"];

  test.todo("Nominative", () => {
    const form = ["nominative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test.todo("Vocative", () => {
    const form = ["vocative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test.todo("Accusative", () => {
    const form = ["accusative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegra");
    expect(scriptor(celer, ...form)).toBe("celeria");
    expect(scriptor(liber, ...form)).toBe("libera");
    expect(scriptor(omnis, ...form)).toBe("omnia");
    expect(scriptor(scribens, ...form)).toBe("scribentia");
    expect(scriptor(scriptus, ...form)).toBe("scripta");
  });
  
  test.todo("Genitive", () => {
    const form = ["genitive", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegrorum");
    expect(scriptor(celer, ...form)).toBe("celerium");
    expect(scriptor(liber, ...form)).toBe("liberorum");
    expect(scriptor(omnis, ...form)).toBe("omnium");
    expect(scriptor(scribens, ...form)).toBe("scribentium");
    expect(scriptor(scriptus, ...form)).toBe("scriptorum");
  });
  
  test.todo("Dative", () => {
    const form = ["dative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
  
  test.todo("Ablative", () => {
    const form = ["ablative", ...repeated];
  
    expect(scriptor(aeger, ...form)).toBe("aegris");
    expect(scriptor(celer, ...form)).toBe("celeribus");
    expect(scriptor(liber, ...form)).toBe("liberis");
    expect(scriptor(omnis, ...form)).toBe("omnibus");
    expect(scriptor(scribens, ...form)).toBe("scribentibus");
    expect(scriptor(scriptus, ...form)).toBe("scriptis");
  });
});
