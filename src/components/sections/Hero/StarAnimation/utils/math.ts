export function lerp(start: number, end: number, factor: number): number {
  return start * (1 - factor) + end * factor;
}