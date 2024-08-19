import { Width, Height } from "@/constant";
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
  stylesSetter: [Width, Height],
  component: Select
};
