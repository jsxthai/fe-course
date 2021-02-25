export const truncateString = (string: string, maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

// substring: Extract characters from a string numberStart => numberEnd
