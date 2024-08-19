import { CSSProperties } from "react";
import { create } from "zustand";
import { PageConfig, SectionConfig, ColumnConfig, ButtonConfig, SelectConfig } from "../materials";

export interface ComponentSetter {
  label: string;
  name: string;
  type: string;
  [key: string]: any;
}

export interface ComponentConfig {
  name: string;
  defaultProps: Record<string, any>;
  styles?: CSSProperties;
  setter?: ComponentSetter[];
  stylesSetter?: ComponentSetter[];
  component: any;
}

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
