export function calculateDensity(population: number, area: number): number {
  if (!area) {
    throw new Error("Area is required!");
  }

  if (!population) {
    throw new Error("Population is required!");
  }

  return parseFloat((population / area).toFixed(2));
}
