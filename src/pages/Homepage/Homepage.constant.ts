import validation from "src/utils/validation";

export const homepageConstant = {
  pageTitle: "2RERO RoadsAndLibraries",
  formFields: [
    {
      label: "Number of Cities",
      registeryProp: "n_cities",
      type: "number",
      required: true,
    },
    {
      label: "Road cost",
      registeryProp: "c_road",
      type: "number",
      required: true,
    },
    {
      label: "Library cost",
      registeryProp: "c_lib",
      type: "number",
      required: true,
    },
    {
      label: "2D-Array of Cities",
      registeryProp: "cities",
      type: "text",
      pattern: validation.tooDArray,
      required: true,
    },
  ],

};
