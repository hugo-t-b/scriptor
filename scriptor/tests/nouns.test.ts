import { describe, expect, test } from "bun:test";
import scriptor, { type Noun } from "..";

const metella = scriptor<Noun>("Metella, Metellae, f");
const scriba = scriptor<Noun>("scriba, scribae, m");
const villa = scriptor<Noun>("villa, villae, f");

const hortus = scriptor<Noun>("hortus, horti, m");
const puer = scriptor<Noun>("puer, pueri, m");
const salvius = scriptor<Noun>("Salvius, Salvii, m");

const donum = scriptor<Noun>("donum, doni, n");
const oppidum = scriptor<Noun>("oppidum, oppidi, n");
const templum = scriptor<Noun>("templum, templi, n");

const scriptorNoun = scriptor<Noun>("scriptor, scriptoris, m");
const scriptrix = scriptor<Noun>("scriptrix, scriptricis, f");
const virtus = scriptor<Noun>("virtus, virtutis, f");

const corpus = scriptor<Noun>("corpus, corporis, n");
const nomen = scriptor<Noun>("nomen, nominis, n");
const tempus = scriptor<Noun>("tempus, temporis, n");

const animal = scriptor<Noun>("animal, animalis, n");
const exemplar =  scriptor<Noun>("exemplar, exemplaris, n");
const mare = scriptor<Noun>("mare, maris, n");

const ars = scriptor<Noun>("ars, artis, f", { iStem: true });
const ignis = scriptor<Noun>("ignis, ignis, m", { iStem: true });
const imber = scriptor<Noun>("imber, imbris, m", { iStem: true });

describe("Nominative", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.nominative?.singular;

    expect(find(metella)).toBe("Metella");
    expect(find(hortus)).toBe("hortus");
    expect(find(donum)).toBe("donum");
    expect(find(scriptorNoun)).toBe("scriptor");
    expect(find(corpus)).toBe("corpus");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.nominative?.plural;
  
    expect(find(villa)).toBe("villae");
    expect(find(puer)).toBe("pueri");
    expect(find(templum)).toBe("templa");
    expect(find(virtus)).toBe("virtutes");
    expect(find(tempus)).toBe("tempora");
    expect(find(exemplar)).toBe("exemplaria");
    expect(find(ignis)).toBe("ignes");
  });
});

describe("Vocative", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.vocative?.singular;
  
    expect(find(metella)).toBe("Metella");
    expect(find(hortus)).toBe("horte");
    expect(find(puer)).toBe("puer");
    expect(find(salvius)).toBe("Salvi");
    expect(find(donum)).toBe("donum");
    expect(find(scriptorNoun)).toBe("scriptor");
    expect(find(corpus)).toBe("corpus");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.vocative?.plural;
  
    expect(find(villa)).toBe("villae");
    expect(find(puer)).toBe("pueri");
    expect(find(templum)).toBe("templa");
    expect(find(virtus)).toBe("virtutes");
    expect(find(tempus)).toBe("tempora");
    expect(find(mare)).toBe("maria");
    expect(find(imber)).toBe("imbres");
  });
});

describe("Accusative", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.accusative?.singular;
  
    expect(find(scriba)).toBe("scribam");
    expect(find(puer)).toBe("puerum");
    expect(find(oppidum)).toBe("oppidum");
    expect(find(scriptrix)).toBe("scriptricem");
    expect(find(nomen)).toBe("nomen");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.accusative?.plural;
  
    expect(find(villa)).toBe("villas");
    expect(find(hortus)).toBe("hortos");
    expect(find(donum)).toBe("dona");
    expect(find(scriptorNoun)).toBe("scriptores");
    expect(find(corpus)).toBe("corpora");
    expect(find(animal)).toBe("animalia");
    expect(find(ars)).toBe("artes");
  });
});

describe("Genitive", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.genitive?.singular;
  
    expect(find(villa)).toBe("villae");
    expect(find(salvius)).toBe("Salvii");
    expect(find(templum)).toBe("templi");
    expect(find(virtus)).toBe("virtutis");
    expect(find(tempus)).toBe("temporis");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.genitive?.plural;
  
    expect(find(scriba)).toBe("scribarum");
    expect(find(puer)).toBe("puerorum");
    expect(find(oppidum)).toBe("oppidorum");
    expect(find(scriptrix)).toBe("scriptricum");
    expect(find(nomen)).toBe("nominum");
    expect(find(exemplar)).toBe("exemplarium");
    expect(find(ignis)).toBe("ignium");
  });
});

describe("Dative", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.dative?.singular;
  
    expect(find(metella)).toBe("Metellae");
    expect(find(hortus)).toBe("horto");
    expect(find(donum)).toBe("dono");
    expect(find(scriptorNoun)).toBe("scriptori");
    expect(find(corpus)).toBe("corpori");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.dative?.plural;
  
    expect(find(villa)).toBe("villis");
    expect(find(puer)).toBe("pueris");
    expect(find(templum)).toBe("templis");
    expect(find(virtus)).toBe("virtutibus");
    expect(find(tempus)).toBe("temporibus");
  });
});

describe("Ablative", () => {
  test("Singular", () => {
    const find = (noun: Noun) => noun.ablative?.singular;
  
    expect(find(scriba)).toBe("scriba");
    expect(find(puer)).toBe("puero");
    expect(find(oppidum)).toBe("oppido");
    expect(find(scriptrix)).toBe("scriptrice");
    expect(find(nomen)).toBe("nomine");
    expect(find(animal)).toBe("animali");
    expect(find(ars)).toBe("arte");
  });

  test("Plural", () => {
    const find = (noun: Noun) => noun.ablative?.plural;
  
    expect(find(villa)).toBe("villis");
    expect(find(puer)).toBe("pueris");
    expect(find(templum)).toBe("templis");
    expect(find(virtus)).toBe("virtutibus");
    expect(find(tempus)).toBe("temporibus");
  });
});
