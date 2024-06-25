export default (principalParts: string, ...form: string[]): string => {
  const parts = principalParts.split(/, | ,| |,/g);

  if (parts.length < 3) {
    throw new Error("Too few principal parts provided.");
  }

  return parts[0];
};
