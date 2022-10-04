import { IWordbank } from "../IWordbank";

export class DigitBank implements IWordbank {
  bits() {
    return 3;
  }

  getEntry(i: number) {
    return (i + 1).toString();
  }
}
