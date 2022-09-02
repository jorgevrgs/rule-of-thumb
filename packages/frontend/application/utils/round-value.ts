export function roundValue(value: number, precision: number = 0): number {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}
