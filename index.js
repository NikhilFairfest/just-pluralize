pluralize = (word, count = 0, pluralWord) => {
  const pluralizedWord = count < 1 ? word : `${pluralWord || word}s`;
  return pluralizedWord;
};
