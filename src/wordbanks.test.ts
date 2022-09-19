import * as wb from "./wordbanks";

const BINARY_BASE = 2;

describe("wordbanks", () => {
  wb.partTypeList.forEach((partType) => {
    describe(`${partType} dictionary`, () => {
      it("has at least as many entries as the advertised bits of entropy", () => {
        expect(wb.indepDict[partType].length)
          .toBeGreaterThanOrEqual(Math.pow(BINARY_BASE, wb.partTypeProps[partType].entropyReqBits));
      });
    });
  });
});
