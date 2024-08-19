import { Margin, Padding, Width, Height } from "@/constant";
import Select from ".";

export const SelectConfig = {
  name: "Select",
  defaultProps: {
    options: [
      { value: "jack", label: "Jack" },
      { value: "lucy", label: "Lucy" },
      { value: "Yiminghe", label: "yiminghe" }
    ]
  },
  styles: {
    width: "100%"
  },
  stylesSetter: [Margin, Padding, Width, Height],
  component: Select
};
