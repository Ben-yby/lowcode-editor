import { create } from "zustand";
import { ComponentConfig } from "../interface";
import { ButtonConfig, ColumnConfig, PageConfig, SectionConfig, SelectConfig } from "../materials";

interface State {
  componentConfig: { [key: string]: ComponentConfig };
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>(set => ({
  componentConfig: {
    Page: PageConfig,
    Section: SectionConfig,
    Column: ColumnConfig,
    Button: ButtonConfig,
    Select: SelectConfig
  },
  registerComponent: (name, componentConfig) =>
    set(state => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig
        }
      };
    })
}));
