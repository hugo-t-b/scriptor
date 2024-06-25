import { describe, expect, test } from "bun:test";
import scriptor from "..";

const amo = "amo, amare, amavi, amatus";
const doVerb = "do, dare, dedi, datus";
const porto = "porto, portare, portavi, portatus";

const habeo = "habeo, habere, habui, habitus";
const maneo = "maneo, manere, mansi, mansus";
const moneo = "moneo, monere, monui, monitus";

const contendo = "contendo, contendere, contendi, contentus";
const dico = "dico, dicere, dixi, dictus";
const traho = "traho, trahere, traxi, tractus";

const audio = "audio, audire, audivi, auditus";
const invenio = "invenio, invenire, inveni, inventus";
const saevio = "saevio, saevire, saevii";

describe("Present active indicative", () => {
  const repeated = ["present", "active", "indicative"];

  test("1st person singular", () => {
    expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("amo");
    expect(scriptor(habeo, "1st", "singular", ...repeated)).toBe("habeo");
    expect(scriptor(contendo, "1st", "singular", ...repeated)).toBe("contendo");
    expect(scriptor(audio, "1st", "singular", ...repeated)).toBe("audio");
  });

  test("2nd person singular", () => {
    expect(scriptor(doVerb, "2nd", "singular", ...repeated)).toBe("das");
    expect(scriptor(maneo, "2nd", "singular", ...repeated)).toBe("manes");
    expect(scriptor(dico, "2nd", "singular", ...repeated)).toBe("dicis");
    expect(scriptor(invenio, "2nd", "singular", ...repeated)).toBe("invenis");
  });

  test("3rd person singular", () => {
    expect(scriptor(porto, "3rd", "singular", ...repeated)).toBe("portat");
    expect(scriptor(moneo, "3rd", "singular", ...repeated)).toBe("monet");
    expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("trahit");
    expect(scriptor(saevio, "3rd", "singular", ...repeated)).toBe("saevit");
  });

  test("1st person plural", () => {
    expect(scriptor(amo, "1st", "plural", ...repeated)).toBe("amamus");
    expect(scriptor(habeo, "1st", "plural", ...repeated)).toBe("habemus");
    expect(scriptor(contendo, "1st", "plural", ...repeated)).toBe("contendimus");
    expect(scriptor(audio, "1st", "plural", ...repeated)).toBe("audimus");
  });

  test("2nd person plural", () => {
    expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("datis");
    expect(scriptor(maneo, "2nd", "plural", ...repeated)).toBe("manetis");
    expect(scriptor(dico, "2nd", "plural", ...repeated)).toBe("dicitis");
    expect(scriptor(invenio, "2nd", "plural", ...repeated)).toBe("invenitis");
  });

  test("3rd person plural", () => {
    expect(scriptor(porto, "3rd", "plural", ...repeated)).toBe("portant");
    expect(scriptor(moneo, "3rd", "plural", ...repeated)).toBe("monent");
    expect(scriptor(traho, "3rd", "plural", ...repeated)).toBe("trahunt");
    expect(scriptor(saevio, "3rd", "plural", ...repeated)).toBe("saeviunt");
  });
});

describe("Perfect active indicative", () => {
  const repeated = ["perfect", "active", "indicative"];

  test("1st person singular", () => expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("amavi"));
  test("2nd person singular", () => expect(scriptor(habeo, "2nd", "singular", ...repeated)).toBe("habuisti"));
  test("3rd person singular", () => expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("traxit"));
  test("1st person plural", () => expect(scriptor(invenio, "1st", "plural", ...repeated)).toBe("invenimus"));
  test("2nd person plural", () => expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("dedistis"));
  test("3rd person plural", () => expect(scriptor(maneo, "3nd", "plural", ...repeated)).toBe("manserunt"));
});

describe("Imperfect active indicative", () => {
  const repeated = ["imperfect", "active", "indicative"];

  test("1st person singular", () => {
    expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("amabam");
    expect(scriptor(habeo, "1st", "singular", ...repeated)).toBe("habebam");
    expect(scriptor(contendo, "1st", "singular", ...repeated)).toBe("contendebam");
    expect(scriptor(audio, "1st", "singular", ...repeated)).toBe("audiebam");
  });

  test("2nd person singular", () => {
    expect(scriptor(doVerb, "2nd", "singular", ...repeated)).toBe("dabas");
    expect(scriptor(maneo, "2nd", "singular", ...repeated)).toBe("manebas");
    expect(scriptor(dico, "2nd", "singular", ...repeated)).toBe("dicebas");
    expect(scriptor(invenio, "2nd", "singular", ...repeated)).toBe("inveniebas");
  });

  test("3rd person singular", () => {
    expect(scriptor(porto, "3rd", "singular", ...repeated)).toBe("portabat");
    expect(scriptor(moneo, "3rd", "singular", ...repeated)).toBe("monebat");
    expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("trahebat");
    expect(scriptor(saevio, "3rd", "singular", ...repeated)).toBe("saeviebat");
  });

  test("1st person plural", () => {
    expect(scriptor(amo, "1st", "plural", ...repeated)).toBe("amabamus");
    expect(scriptor(habeo, "1st", "plural", ...repeated)).toBe("habebamus");
    expect(scriptor(contendo, "1st", "plural", ...repeated)).toBe("contendebamus");
    expect(scriptor(audio, "1st", "plural", ...repeated)).toBe("audiebamus");
  });

  test("2nd person plural", () => {
    expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("dabatis");
    expect(scriptor(maneo, "2nd", "plural", ...repeated)).toBe("manebatis");
    expect(scriptor(dico, "2nd", "plural", ...repeated)).toBe("dicebatis");
    expect(scriptor(invenio, "2nd", "plural", ...repeated)).toBe("inveniebatis");
  });

  test("3rd person plural", () => {
    expect(scriptor(porto, "3rd", "plural", ...repeated)).toBe("portabant");
    expect(scriptor(moneo, "3rd", "plural", ...repeated)).toBe("monebant");
    expect(scriptor(traho, "3rd", "plural", ...repeated)).toBe("trahebant");
    expect(scriptor(saevio, "3rd", "plural", ...repeated)).toBe("saeviebant");
  });
});

describe("Pluperfect active indicative", () => {
  const repeated = ["pluperfect", "active", "indicative"];

  test("1st person singular", () => expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("amaveram"));
  test("2nd person singular", () => expect(scriptor(habeo, "2nd", "singular", ...repeated)).toBe("habueras"));
  test("3rd person singular", () => expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("traxerat"));
  test("1st person plural", () => expect(scriptor(invenio, "1st", "plural", ...repeated)).toBe("inveneramus"));
  test("2nd person plural", () => expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("dederatis"));
  test("3rd person plural", () => expect(scriptor(maneo, "3nd", "plural", ...repeated)).toBe("manserant"));
});

describe("Imperfect active subjunctive", () => {
  const repeated = ["imperfect", "active", "subjunctive"];

  test("1st person singular", () => expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("amarem"));
  test("2nd person singular", () => expect(scriptor(habeo, "2nd", "singular", ...repeated)).toBe("haberes"));
  test("3rd person singular", () => expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("traheret"));
  test("1st person plural", () => expect(scriptor(invenio, "1st", "plural", ...repeated)).toBe("inveniremus"));
  test("2nd person plural", () => expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("daretis"));
  test("3rd person plural", () => expect(scriptor(maneo, "3nd", "plural", ...repeated)).toBe("manerent"));
});

describe("Pluperfect active subjunctive", () => {
  const repeated = ["pluperfect", "active", "subjunctive"];

  test("1st person singular", () => expect(scriptor(amo, "1st", "singular", ...repeated)).toBe("spectavissem"));
  test("2nd person singular", () => expect(scriptor(habeo, "2nd", "singular", ...repeated)).toBe("habuisses"));
  test("3rd person singular", () => expect(scriptor(traho, "3rd", "singular", ...repeated)).toBe("traxisset"));
  test("1st person plural", () => expect(scriptor(invenio, "1st", "plural", ...repeated)).toBe("invenissemus"));
  test("2nd person plural", () => expect(scriptor(doVerb, "2nd", "plural", ...repeated)).toBe("dedissetis"));
  test("3rd person plural", () => expect(scriptor(maneo, "3nd", "plural", ...repeated)).toBe("mansissent"));
});

describe("Present active imperative", () => {
  const repeated = ["present", "active", "imperative"];

  test("2nd person singular", () => {
    expect(scriptor(amo, "2nd", "singular", ...repeated)).toBe("ama");
    expect(scriptor(habeo, "2nd", "singular", ...repeated)).toBe("habe");
    expect(scriptor(traho, "2nd", "singular", ...repeated)).toBe("trahe");
    expect(scriptor(invenio, "2nd", "singular", ...repeated)).toBe("inveni");
  });

  test("2nd person plural", () => {
    expect(scriptor(amo, "2nd", "plural", ...repeated)).toBe("amate");
    expect(scriptor(habeo, "2nd", "plural", ...repeated)).toBe("habete");
    expect(scriptor(traho, "2nd", "plural", ...repeated)).toBe("trahite");
    expect(scriptor(invenio, "2nd", "plural", ...repeated)).toBe("invenite");
  });
});

test("Present active infinitive", () => {
  const repeated = ["present", "active", "infinitive"];

  expect(scriptor(amo, ...repeated)).toBe("amare");
  expect(scriptor(habeo, ...repeated)).toBe("habere");
  expect(scriptor(traho, ...repeated)).toBe("trahere");
  expect(scriptor(invenio, ...repeated)).toBe("invenire");
});

describe("Perfect active infinitive", () => {
  const repeated = ["perfect", "active", "infinitive"];

  expect(scriptor(amo, ...repeated)).toBe("amavisse");
  expect(scriptor(habeo, ...repeated)).toBe("habuisse");
  expect(scriptor(traho, ...repeated)).toBe("traxisse");
  expect(scriptor(invenio, ...repeated)).toBe("invenisse");
});

describe("Present active participle", () => {
  const repeated = ["present", "active", "participle"];

  expect(scriptor(amo, ...repeated)).toBe("amans, amantis");
  expect(scriptor(habeo, ...repeated)).toBe("habens, habentis");
  expect(scriptor(traho, ...repeated)).toBe("trahens, trahentis");
  expect(scriptor(invenio, ...repeated)).toBe("inveniens, invenientis");
});

describe("Perfect passive participle", () => {
  const repeated = ["perfect", "passive", "participle"];

  expect(scriptor(amo, ...repeated)).toBe("amatus, amata, amatum");
  expect(scriptor(habeo, ...repeated)).toBe("habitus, habita, habitum");
  expect(scriptor(traho, ...repeated)).toBe("tractus, tracta, tractum");
  expect(scriptor(invenio, ...repeated)).toBe("inventus, inveta, inventum");
});
