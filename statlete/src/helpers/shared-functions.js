export const toCamel = (string) => {
  return string.replace(/([-_][a-z])/ig, (char) => {
    return char.toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
};

export const keysToCamel = function (data) {
  if (Array.isArray(data)) {
    return data.map((value) => {
      return keysToCamel(value);
    });
  } else if (typeof(data) === "object") {
    const newObj = {};

    Object.keys(data)
      .forEach((key) => {
        newObj[toCamel(key)] = keysToCamel(data[key]);
      });

    return newObj;
  }

  return data;
};