import {PhrasePart} from "./PhrasePart";
import {PhraseStruct} from "./phrase";
import {PartType} from '../wordbanks';

export function makePhraseSimple(): PhraseStruct {
  const symbol = new PhrasePart(PartType.symbol);
  const digit = new PhrasePart(PartType.digit);
  const adj = new PhrasePart(PartType.adjective);
  const cnoun = new PhrasePart(PartType.countNoun);

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
  const symbol = new PhrasePart(PartType.symbol);
  const digit = new PhrasePart(PartType.digit);
  const adj = new PhrasePart(PartType.adjective);
  const cnoun = new PhrasePart(PartType.countNoun);
  const verb = new PhrasePart(PartType.verb);
  const adverb = new PhrasePart(PartType.adverb);

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
  const symbol = new PhrasePart(PartType.symbol);
  const adj1 = new PhrasePart(PartType.adjective);
  const noun1 = new PhrasePart(PartType.uncountNoun);
  const verb1 = new PhrasePart(PartType.verb);
  const conj = new PhrasePart(PartType.conjunction);
  const digit = new PhrasePart(PartType.digit);
  const cnoun2 = new PhrasePart(PartType.countNoun);
  const verb2 = new PhrasePart(PartType.verb);

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

