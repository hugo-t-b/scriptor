import { describe, expect, test } from "bun:test";
import scriptor, { type Verb } from "..";

const amo = scriptor<Verb>("amo, amare, amavi, amatus");
const doVerb = scriptor<Verb>("do, dare, dedi, datus");
const porto = scriptor<Verb>("porto, portare, portavi, portatus");

const habeo = scriptor<Verb>("habeo, habere, habui, habitus");
const maneo = scriptor<Verb>("maneo, manere, mansi, mansus");
const moneo = scriptor<Verb>("moneo, monere, monui, monitus");

const contendo = scriptor<Verb>("contendo, contendere, contendi, contentus");
const dico = scriptor<Verb>("dico, dicere, dixi, dictus");
const traho = scriptor<Verb>("traho, trahere, traxi, tractus");

const capio = scriptor<Verb>("capio, capere, cepi, captus");
const facio = scriptor<Verb>("facio, facere, feci, factus");
const fugio = scriptor<Verb>("fugio, fugere, fugi, fugitus");

const audio = scriptor<Verb>("audio, audire, audivi, auditus");
const invenio = scriptor<Verb>("invenio, invenire, inveni, inventus");
const saevio = scriptor<Verb>("saevio, saevire, saevii");

describe("Indicative", () => {
  describe("Present active", () => {
    test("1st person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.singular?.first;

      expect(find(amo)).toBe("amo");
      expect(find(habeo)).toBe("habeo");
      expect(find(contendo)).toBe("contendo");
      expect(find(capio)).toBe("capio");
      expect(find(audio)).toBe("audio");
    });

    test("2nd person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.singular?.second;

      expect(find(doVerb)).toBe("das");
      expect(find(maneo)).toBe("manes");
      expect(find(dico)).toBe("dicis");
      expect(find(facio)).toBe("facis");
      expect(find(invenio)).toBe("invenis");
    });

    test("3rd person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.singular?.third;

      expect(find(porto)).toBe("portat");
      expect(find(moneo)).toBe("monet");
      expect(find(traho)).toBe("trahit");
      expect(find(fugio)).toBe("fugit");
      expect(find(saevio)).toBe("saevit");
    });

    test("1st person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.plural?.first;

      expect(find(amo)).toBe("amamus");
      expect(find(habeo)).toBe("habemus");
      expect(find(contendo)).toBe("contendimus");
      expect(find(capio)).toBe("capimus");
      expect(find(audio)).toBe("audimus");
    });

    test("2nd person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.plural?.second;

      expect(find(doVerb)).toBe("datis");
      expect(find(maneo)).toBe("manetis");
      expect(find(dico)).toBe("dicitis");
      expect(find(facio)).toBe("facitis");
      expect(find(invenio)).toBe("invenitis");
    });

    test("3rd person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.present?.plural?.third;

      expect(find(porto)).toBe("portant");
      expect(find(moneo)).toBe("monent");
      expect(find(traho)).toBe("trahunt");
      expect(find(fugio)).toBe("fugiunt");
      expect(find(saevio)).toBe("saeviunt");
    });
  });

  describe("Perfect active", () => {
    test("1st person singular", () => expect(amo.indicative?.active?.perfect?.singular?.first).toBe("amavi"));
    test("2nd person singular", () => expect(habeo.indicative?.active?.perfect?.singular?.second).toBe("habuisti"));
    test("3rd person singular", () => expect(traho.indicative?.active?.perfect?.singular?.third).toBe("traxit"));
    test("1st person plural", () => expect(invenio.indicative?.active?.perfect?.plural?.first).toBe("invenimus"));
    test("2nd person plural", () => expect(doVerb.indicative?.active?.perfect?.plural?.second).toBe("dedistis"));
    test("3rd person plural", () => expect(maneo.indicative?.active?.perfect?.plural?.third).toBe("manserunt"));  
  });

  describe("Imperfect active", () => {
    test("1st person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.singular?.first;

      expect(find(amo)).toBe("amabam");
      expect(find(habeo)).toBe("habebam");
      expect(find(contendo)).toBe("contendebam");
      expect(find(capio)).toBe("capiebam");
      expect(find(audio)).toBe("audiebam");
    });

    test("2nd person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.singular?.second;

      expect(find(doVerb)).toBe("dabas");
      expect(find(maneo)).toBe("manebas");
      expect(find(dico)).toBe("dicebas");
      expect(find(facio)).toBe("faciebas");
      expect(find(invenio)).toBe("inveniebas");
    });

    test("3rd person singular", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.singular?.third;

      expect(find(porto)).toBe("portabat");
      expect(find(moneo)).toBe("monebat");
      expect(find(traho)).toBe("trahebat");
      expect(find(fugio)).toBe("fugiebat");
      expect(find(saevio)).toBe("saeviebat");
    });

    test("1st person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.plural?.first;

      expect(find(amo)).toBe("amabamus");
      expect(find(habeo)).toBe("habebamus");
      expect(find(contendo)).toBe("contendebamus");
      expect(find(capio)).toBe("capiebamus");
      expect(find(audio)).toBe("audiebamus");
    });

    test("2nd person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.plural?.second;

      expect(find(doVerb)).toBe("dabatis");
      expect(find(maneo)).toBe("manebatis");
      expect(find(dico)).toBe("dicebatis");
      expect(find(facio)).toBe("faciebatis");
      expect(find(invenio)).toBe("inveniebatis");
    });

    test("3rd person plural", () => {
      const find = (verb: Verb) => verb.indicative?.active?.imperfect?.plural?.third;

      expect(find(porto)).toBe("portabant");
      expect(find(moneo)).toBe("monebant");
      expect(find(traho)).toBe("trahebant");
      expect(find(fugio)).toBe("fugiebant");
      expect(find(saevio)).toBe("saeviebant");
    });
  });

  describe("Pluperfect active", () => {  
    test("1st person singular", () => expect(amo.indicative?.active?.pluperfect?.singular?.first).toBe("amaveram"));
    test("2nd person singular", () => expect(habeo.indicative?.active?.pluperfect?.singular?.second).toBe("habueras"));
    test("3rd person singular", () => expect(traho.indicative?.active?.pluperfect?.singular?.third).toBe("traxerat"));
    test("1st person plural", () => expect(invenio.indicative?.active?.pluperfect?.plural?.first).toBe("inveneramus"));
    test("2nd person plural", () => expect(doVerb.indicative?.active?.pluperfect?.plural?.second).toBe("dederatis"));
    test("3rd person plural", () => expect(maneo.indicative?.active?.pluperfect?.plural?.third).toBe("manserant"));
  });
});

describe("Subjunctive", () => {
  describe("Imperfect active", () => {
    test("1st person singular", () => expect(amo.subjunctive?.active?.imperfect?.singular?.first).toBe("amarem"));
    test("2nd person singular", () => expect(habeo.subjunctive?.active?.imperfect?.singular?.second).toBe("haberes"));
    test("3rd person singular", () => expect(traho.subjunctive?.active?.imperfect?.singular?.third).toBe("traheret"));
    test("1st person plural", () => expect(invenio.subjunctive?.active?.imperfect?.plural?.first).toBe("inveniremus"));
    test("2nd person plural", () => expect(doVerb.subjunctive?.active?.imperfect?.plural?.second).toBe("daretis"));
    test("3rd person plural", () => expect(maneo.subjunctive?.active?.imperfect?.plural?.third).toBe("manerent"));
  });

  describe("Pluperfect active", () => {
    test("1st person singular", () => expect(amo.subjunctive?.active?.pluperfect?.singular?.first).toBe("amavissem"));
    test("2nd person singular", () => expect(habeo.subjunctive?.active?.pluperfect?.singular?.second).toBe("habuisses"));
    test("3rd person singular", () => expect(traho.subjunctive?.active?.pluperfect?.singular?.third).toBe("traxisset"));
    test("1st person plural", () => expect(invenio.subjunctive?.active?.pluperfect?.plural?.first).toBe("invenissemus"));
    test("2nd person plural", () => expect(doVerb.subjunctive?.active?.pluperfect?.plural?.second).toBe("dedissetis"));
    test("3rd person plural", () => expect(maneo.subjunctive?.active?.pluperfect?.plural?.third).toBe("mansissent"));
  });
});

describe("Imperative", () => {
  describe("Present active", () => {
    test("2nd person singular", () => {
      const find = (verb: Verb) => verb.imperative?.active?.present?.singular?.second;

      expect(find(amo)).toBe("ama");
      expect(find(habeo)).toBe("habe");
      expect(find(traho)).toBe("trahe");
      expect(find(capio)).toBe("cape");
      expect(find(invenio)).toBe("inveni");
    });
  
    test("2nd person plural", () => {
      const find = (verb: Verb) => verb.imperative?.active?.present?.plural?.second;

      expect(find(amo)).toBe("amate");
      expect(find(habeo)).toBe("habete");
      expect(find(traho)).toBe("trahite");
      expect(find(facio)).toBe("facite");
      expect(find(invenio)).toBe("invenite");
    });
  });
});

describe("Infinitive", () => {
  test("Present active", () => {
    const find = (verb: Verb) => verb.infinitive?.active?.present;

    expect(find(amo)).toBe("amare");
    expect(find(habeo)).toBe("habere");
    expect(find(traho)).toBe("trahere");
    expect(find(fugio)).toBe("fugere");
    expect(find(invenio)).toBe("invenire");  
  });
  
  test("Perfect active", () => {
    const find = (verb: Verb) => verb.infinitive?.active?.perfect;

    expect(find(amo)).toBe("amavisse");
    expect(find(habeo)).toBe("habuisse");
    expect(find(traho)).toBe("traxisse");
    expect(find(capio)).toBe("cepisse");
    expect(find(invenio)).toBe("invenisse");
  });
});

describe("Participle", () => {
  test("Present active", () => {
    const find = (verb: Verb) => verb.participle?.active?.present;

    expect(find(amo)).toBe("amans, amantis");
    expect(find(habeo)).toBe("habens, habentis");
    expect(find(traho)).toBe("trahens, trahentis");
    expect(find(facio)).toBe("faciens, facientis");
    expect(find(invenio)).toBe("inveniens, invenientis");  
  });

  test("Perfect passive", () => {
    const find = (verb: Verb) => verb.participle?.passive?.perfect;

    expect(find(amo)).toBe("amatus, amata, amatum");
    expect(find(habeo)).toBe("habitus, habita, habitum");
    expect(find(traho)).toBe("tractus, tracta, tractum");
    expect(find(fugio)).toBe("fugitus, fugita, fugitum");
    expect(find(invenio)).toBe("inventus, inventa, inventum");
  });
});
