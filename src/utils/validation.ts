const validation = {
  tooDArray: {
    value: /^\[(\[\d+,\d+],)*(\[\d+,\d+])]$/,
    message: "Invalid 2D-Array input",
  },
};
export default validation;
