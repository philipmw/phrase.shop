interface IEntropySource {
  name: string;
  bitsAvailable(): number;
  getBits(qty: number): number;
}
