import { Label } from "@/constant";
import { ComponentConfig } from "@/editor/interface";
import Select from ".";

export const SelectConfig: ComponentConfig = {
  name: "Select",
  defaultProps: {
    lable: "",
    value: "",
    options: []
  },
  styles: {
    width: "100%"
  },
  setter: [Label],
  stylesSetter: [],
  component: Select
};
