import Select from ".";

export const SelectConfig = {
  name: "Select",
  defaultProps: {
    lable: "",
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" }
    ]
  },
  styles: {
    width: "100%"
  },
  stylesSetter: [],
  component: Select
};
