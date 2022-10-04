import {makePhraseHard, makePhraseMedium, makePhraseSimple} from "./phraseTemplates";
import {entropyNeededForPhrase} from "./phrase";
import {visitTreeWithDependencies} from "./tree";

describe("phrase templates", () => {
  it("has expected entropy requirements", () => {
    expect(entropyNeededForPhrase(makePhraseSimple())).toBe(26);
    expect(entropyNeededForPhrase(makePhraseMedium())).toBe(42);
    expect(entropyNeededForPhrase(makePhraseHard())).toBe(58);
  });

  it("has a properly structured dependency tree", () => {
    const simplePhrase = makePhraseSimple();
    expect(simplePhrase.order).toHaveLength(wordNodesInPhrase(simplePhrase));

    const mediumPhrase = makePhraseMedium();
    expect(mediumPhrase.order).toHaveLength(wordNodesInPhrase(mediumPhrase));

    const hardPhrase = makePhraseHard();
    expect(hardPhrase.order).toHaveLength(wordNodesInPhrase(hardPhrase));
  });
});

function wordNodesInPhrase(phrase): number {
  let seenWordNodes = 0;
  visitTreeWithDependencies(phrase.depTree, () => {
    ++seenWordNodes;
  });
  return seenWordNodes;
}
