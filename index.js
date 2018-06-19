module.exports.pluralize = (word, count = 0, pluralWord) => {
  if (!!word) {
    const pluralizedWord = count <= 1 ? word : pluralWord || `${word}s`;
    return pluralizedWord;
  } else {
    throw new Error("Oops you didn't pass the singular word");
  }
};
