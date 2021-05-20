export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const numberToStringConverter = (number) => {
  const string = '' + number;
  const length = string.length - 1;
  const tmp = length / 3;
  if (tmp >= 1) {
    const floor = Math.floor(tmp);
    const letter = 'KMGT'[floor - 1];
    const nb = tmp - floor;
    const nbOfNbs = nb * 3;

    return (
      string.slice(0, nbOfNbs + 1) +
      '.' +
      string.slice(nbOfNbs + 2, nbOfNbs + 3) +
      letter
    );
    // 1      1 000       1K
    // 1.3    10 000      10K
    // 1.6    100 000     100K
    // 2      1 000 000   1M
    // 2.3    10 000 000  10M
  } else return number;
};
