import {PhrasePart} from "./PhrasePart";
import {PhraseStruct} from "./phrase";
import * as wb from '../wordbanks';

export function makePhraseSimple(): PhraseStruct {
  const symbol = new PhrasePart(wb.PartType.symbol);
  const digit = new PhrasePart(wb.PartType.digit);
  const adj = new PhrasePart(wb.PartType.adjective);
  const cnoun = new PhrasePart(wb.PartType.countNoun);

  return {
    order: [symbol, digit, adj, cnoun],
    depTree: {
      leaves: [
        { value: symbol, leaves: [] },
        { value: adj, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: cnoun, leaves: [] }
          ]
        }
      ],
    }
  };
}

export function makePhraseMedium(): PhraseStruct {
  const symbol = new PhrasePart(wb.PartType.symbol);
  const digit = new PhrasePart(wb.PartType.digit);
  const adj = new PhrasePart(wb.PartType.adjective);
  const cnoun = new PhrasePart(wb.PartType.countNoun);
  const verb = new PhrasePart(wb.PartType.verb);
  const adverb = new PhrasePart(wb.PartType.adverb);

  return {
    order: [symbol, digit, adj, cnoun, verb, adverb],
    depTree: {
      leaves: [
        { value: symbol, leaves: [] },
        { value: adj, leaves: [] },
        { value: adverb, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: cnoun, leaves: [] },
            { value: verb, leaves: [] },
          ],
        },
      ],
    },
  };
}

export function makePhraseHard(): PhraseStruct {
  const symbol = new PhrasePart(wb.PartType.symbol);
  const adj1 = new PhrasePart(wb.PartType.adjective);
  const noun1 = new PhrasePart(wb.PartType.notcountNoun);
  const verb1 = new PhrasePart(wb.PartType.verb);
  const conj = new PhrasePart(wb.PartType.conjunction);
  const digit = new PhrasePart(wb.PartType.digit);
  const cnoun2 = new PhrasePart(wb.PartType.countNoun);
  const verb2 = new PhrasePart(wb.PartType.verb);

  return {
    order: [symbol, adj1, noun1, verb1, conj, digit, cnoun2, verb2],
    depTree: {
      leaves: [
        { value: symbol, leaves: [] },
        { value: adj1, leaves: [] },
        { value: noun1, leaves: [] },
        { value: verb1, leaves: [] },
        { value: conj, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: cnoun2, leaves: [] },
            { value: verb2, leaves: [] },
          ],
        },
      ],
    },
  };
}

