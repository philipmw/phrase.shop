interface IEntropySource {
  bitsAvailable(): number;
  getBits(qty: number): number;
}
