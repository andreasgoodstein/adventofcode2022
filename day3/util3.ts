export const getLetterPriority = (letter: string) => {
  if (!letter) {
    return 0;
  }

  const charCode = letter.charCodeAt(0);

  return charCode < 97 ? charCode - 38 : charCode - 96;
};
