import { IWordbank } from "../IWordbank";

export class Capitalizable implements IWordbank {
  private readonly innerBank: IWordbank;

  constructor(innerBank: IWordbank) {
    this.innerBank = innerBank;
  }

  bits() {
    return this.innerBank.bits() + 1;
  }

  getEntry(i: number, qty?: number) {
    const isCapitalized = i % 2 === 1;
    const innerI = i >> 1;
    const innerEntry = this.innerBank.getEntry(innerI, qty);

    if (isCapitalized) {
      const firstLetter = innerEntry.charAt(0).toUpperCase();
      return `${firstLetter}${innerEntry.substring(1)}`;
    }

    return innerEntry;
  }
}