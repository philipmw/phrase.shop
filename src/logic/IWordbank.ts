export interface IWordbank {
  bits(): number;
  getEntry(i: number, qty?: number): string;
}