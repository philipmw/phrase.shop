import {PhrasePart} from "./PhrasePart";
import {PhraseStruct} from "./phrase";
import * as wb from '../wordbanks';

export function makePhraseSimple(): PhraseStruct {
  const symbol = new PhrasePart(wb.PartType.symbol);
  const digit = new PhrasePart(wb.PartType.digit);
  const adj = new PhrasePart(wb.PartType.adjective);
  const noun = new PhrasePart(wb.PartType.noun);

  return {
    order: [symbol, digit, adj, noun],
    depTree: {
      leaves: [
        { value: symbol, leaves: [] },
        { value: adj, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: noun, leaves: [] }
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
  const noun = new PhrasePart(wb.PartType.noun);
  const verb = new PhrasePart(wb.PartType.verb);
  const adverb = new PhrasePart(wb.PartType.adverb);

  return {
    order: [symbol, digit, adj, noun, verb, adverb],
    depTree: {
      leaves: [
        { value: symbol, leaves: [] },
        { value: adj, leaves: [] },
        { value: adverb, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: noun, leaves: [] },
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
  const noun1 = new PhrasePart(wb.PartType.noun);
  const verb1 = new PhrasePart(wb.PartType.verb);
  const conj = new PhrasePart(wb.PartType.conjunction);
  const digit = new PhrasePart(wb.PartType.digit);
  const noun2 = new PhrasePart(wb.PartType.noun);
  const verb2 = new PhrasePart(wb.PartType.verb);

  return {
    order: [symbol, adj1, noun1, verb1, conj, digit, noun2, verb2],
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
            { value: noun2, leaves: [] },
            { value: verb2, leaves: [] },
          ],
        },
      ],
    },
  };
}

