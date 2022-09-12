import {PhrasePart} from "./PhrasePart";
import {Sentence} from "./Sentence";
import * as wb from '../wordbanks';

export function makeSentenceSimple(): Sentence {
  const digit = new PhrasePart(wb.PartType.digit);
  const adj = new PhrasePart(wb.PartType.adjective);
  const noun = new PhrasePart(wb.PartType.noun);

  return new Sentence({
    order: [digit, adj, noun],
    depTree: {
      leaves: [
        { value: adj, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: noun, leaves: [] }
          ]
        }
      ],
    }
  });
}

export function makeSentenceMedium(): Sentence {
  const digit = new PhrasePart(wb.PartType.digit);
  const adj = new PhrasePart(wb.PartType.adjective);
  const noun = new PhrasePart(wb.PartType.noun);
  const verb = new PhrasePart(wb.PartType.verb);
  const adverb = new PhrasePart(wb.PartType.adverb);

  return new Sentence({
    order: [digit, adj, noun, verb, adverb],
    depTree: {
      leaves: [
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
  });
}

export function makeSentenceHard(): Sentence {
  const adj1 = new PhrasePart(wb.PartType.adjective);
  const noun1 = new PhrasePart(wb.PartType.noun);
  const verb1 = new PhrasePart(wb.PartType.verb);
  const conj = new PhrasePart(wb.PartType.conjunction);
  const digit = new PhrasePart(wb.PartType.digit);
  const color = new PhrasePart(wb.PartType.color);
  const noun2 = new PhrasePart(wb.PartType.noun);
  const verb2 = new PhrasePart(wb.PartType.verb);

  return new Sentence({
    order: [adj1, noun1, verb1, conj, digit, color, noun2, verb2],
    depTree: {
      leaves: [
        { value: adj1, leaves: [] },
        { value: noun1, leaves: [] },
        { value: verb1, leaves: [] },
        { value: conj, leaves: [] },
        { value: color, leaves: [] },
        {
          value: digit,
          leaves: [
            { value: noun2, leaves: [] },
            { value: verb2, leaves: [] },
          ],
        },
      ],
    },
  });
}

