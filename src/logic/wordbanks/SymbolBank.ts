import { maxBitsForList } from "./utils";
import { IWordbank } from "../IWordbank";

const SYMBOLS = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

const BITS = maxBitsForList(SYMBOLS);

export class SymbolBank implements IWordbank {
  bits() {
    return BITS;
  }

  getEntry(i: number) {
    return SYMBOLS[i];
  }
}
