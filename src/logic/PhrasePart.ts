import {PartType} from '../wordbanks';

export type PhrasePartPlainValue = number | string | undefined;

/** This class is responsible for owning an instance of a specific part of speech.
 * The reason it's a class, rather than an interface, is to allow `SenStruct`'s
 * `order` and `depTree` structures to reference the same object.
 */
export class PhrasePart {
  private readonly part: PartType;
  private plainValue: PhrasePartPlainValue;

  constructor(part: PartType, plainValue?: PhrasePartPlainValue) {
    this.part = part;
    this.plainValue = plainValue;
  }

  getPartType(): PartType {
    return this.part;
  }

  getPlainValue(): PhrasePartPlainValue {
    return this.plainValue;
  }

  setPlainValue(newValue: PhrasePartPlainValue) {
    this.plainValue = newValue;
  }

  getPlaintext(): string {
    if (!this.plainValue) {
      throw new Error("Cannot get plaintext when plain value isn't set");
    }
    return this.plainValue.toString();
  }
}

