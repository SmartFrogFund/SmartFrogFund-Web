export const abbreviateNumber = (value: number | bigint): string => {
  const num = typeof value === "bigint" ? Number(value) : value;
  const absValue = Math.abs(num);

  if (absValue >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(2).replace(/\.00$/, "")}B`;
  }
  if (absValue >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  }
  if (absValue >= 1_000) {
    return `${(num / 1_000).toFixed(2).replace(/\.00$/, "")}K`;
  }
  return num.toString();
};
