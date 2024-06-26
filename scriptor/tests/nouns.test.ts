import { describe, expect, test } from "bun:test";
import scriptor from "..";

const metella = "Metella, Metellae, f";
const scriba = "scriba, scribae, m";
const villa = "villa, villae, f";

const hortus = "hortus, horti, m";
const puer = "puer, pueri, m";
const salvius = "Salvius, Salvii, m";

const donum = "donum, doni, n";
const oppidum = "oppidum, oppidi, n";
const templum = "templum, templi, n";

const scriptorNoun = "scriptor, scriptoris, m";
const scriptrix = "scriptrix, scriptricis, f";
const virtus = "virtus, virtutis, f";

const corpus = "corpus, corporis, n";
const nomen = "nomen, nominis, n";
const tempus = "tempus, temporis, n";

const animal = "animal, animalis, n";
const exemplar =  "exemplar, exemplaris, n";
const mare = "mare, maris, n";

describe("Singular", () => {
  test("Nominative", () => {
    const form = ["nominative", "singular"];
  
    expect(scriptor(metella, ...form)).toBe("Metella");
    expect(scriptor(hortus, ...form)).toBe("hortus");
    expect(scriptor(donum, ...form)).toBe("donum");
    expect(scriptor(scriptorNoun, ...form)).toBe("scriptor");
    expect(scriptor(corpus, ...form)).toBe("corpus");
  });

  test("Vocative", () => {
    const form = ["vocative", "singular"];
  
    expect(scriptor(metella, ...form)).toBe("Metella");
    expect(scriptor(hortus, ...form)).toBe("horte");
    expect(scriptor(puer, ...form)).toBe("puer");
    expect(scriptor(salvius, ...form)).toBe("Salvi");
    expect(scriptor(donum, ...form)).toBe("donum");
    expect(scriptor(scriptorNoun, ...form)).toBe("scriptor");
    expect(scriptor(corpus, ...form)).toBe("corpus");
  });

  test("Accusative", () => {
    const form = ["accusative", "singular"];
  
    expect(scriptor(scriba, ...form)).toBe("scribam");
    expect(scriptor(puer, ...form)).toBe("puerum");
    expect(scriptor(oppidum, ...form)).toBe("oppidum");
    expect(scriptor(scriptrix, ...form)).toBe("scriptricem");
    expect(scriptor(nomen, ...form)).toBe("nomen");
  });

  test("Genitive", () => {
    const form = ["genitive", "singular"];
  
    expect(scriptor(villa, ...form)).toBe("villae");
    expect(scriptor(salvius, ...form)).toBe("Salvii");
    expect(scriptor(templum, ...form)).toBe("templi");
    expect(scriptor(virtus, ...form)).toBe("virtutis");
    expect(scriptor(tempus, ...form)).toBe("temporis");
  });

  test("Dative", () => {
    const form = ["dative", "singular"];
  
    expect(scriptor(metella, ...form)).toBe("Metellae");
    expect(scriptor(hortus, ...form)).toBe("horto");
    expect(scriptor(donum, ...form)).toBe("dono");
    expect(scriptor(scriptorNoun, ...form)).toBe("scriptori");
    expect(scriptor(corpus, ...form)).toBe("corpori");
  });

  test("Ablative", () => {
    const form = ["ablative", "singular"];
  
    expect(scriptor(scriba, ...form)).toBe("scriba");
    expect(scriptor(puer, ...form)).toBe("puero");
    expect(scriptor(oppidum, ...form)).toBe("oppido");
    expect(scriptor(scriptrix, ...form)).toBe("scriptrice");
    expect(scriptor(nomen, ...form)).toBe("nomine");
    expect(scriptor(animal, ...form)).toBe("animali");
  });
});

describe("Plural", () => {
  test("Nominative", () => {
    const form = ["nominative", "plural"];
  
    expect(scriptor(villa, ...form)).toBe("villae");
    expect(scriptor(puer, ...form)).toBe("pueri");
    expect(scriptor(templum, ...form)).toBe("templa");
    expect(scriptor(virtus, ...form)).toBe("virtutes");
    expect(scriptor(tempus, ...form)).toBe("tempora");
    expect(scriptor(exemplar, ...form)).toBe("exemplaria");
  });

  test("Vocative", () => {
    const form = ["vocative", "plural"];
  
    expect(scriptor(villa, ...form)).toBe("villae");
    expect(scriptor(puer, ...form)).toBe("pueri");
    expect(scriptor(templum, ...form)).toBe("templa");
    expect(scriptor(virtus, ...form)).toBe("virtutes");
    expect(scriptor(tempus, ...form)).toBe("tempora");
    expect(scriptor(mare, ...form)).toBe("maria");
  });

  test("Accusative", () => {
    const form = ["accusative", "plural"];
  
    expect(scriptor(villa, ...form)).toBe("villas");
    expect(scriptor(hortus, ...form)).toBe("hortos");
    expect(scriptor(donum, ...form)).toBe("dona");
    expect(scriptor(scriptorNoun, ...form)).toBe("scriptores");
    expect(scriptor(corpus, ...form)).toBe("corpora");
    expect(scriptor(animal, ...form)).toBe("animalia");
  });

  test("Genitive", () => {
    const form = ["genitive", "plural"];
  
    expect(scriptor(scriba, ...form)).toBe("scribarum");
    expect(scriptor(puer, ...form)).toBe("puerorum");
    expect(scriptor(oppidum, ...form)).toBe("oppidorum");
    expect(scriptor(scriptrix, ...form)).toBe("scriptricum");
    expect(scriptor(nomen, ...form)).toBe("nominum");
    expect(scriptor(exemplar, ...form)).toBe("exemplarium");
  });

  test("Dative", () => {
    const form = ["dative", "plural"];
  
    expect(scriptor(villa, ...form)).toBe("villis");
    expect(scriptor(puer, ...form)).toBe("pueris");
    expect(scriptor(templum, ...form)).toBe("templis");
    expect(scriptor(virtus, ...form)).toBe("virtutibus");
    expect(scriptor(tempus, ...form)).toBe("temporibus");
  });

  test("Ablative", () => {
    const form = ["ablative", "plural"];
  
    expect(scriptor(villa, ...form)).toBe("villis");
    expect(scriptor(puer, ...form)).toBe("pueris");
    expect(scriptor(templum, ...form)).toBe("templis");
    expect(scriptor(virtus, ...form)).toBe("virtutibus");
    expect(scriptor(tempus, ...form)).toBe("temporibus");
  });
});
