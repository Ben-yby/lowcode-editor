import Select from ".";

export const SelectConfig = {
  name: "Select",
  defaultProps: {
    lable: "",
    value: "",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "yiminghe", label: "Yiminghe" }
    ]
  },
  styles: {
    width: "100%"
  },
  stylesSetter: [],
  component: Select
};
