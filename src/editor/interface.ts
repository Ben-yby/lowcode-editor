import { CSSProperties } from "react";

export interface CommonComponentProps {
  id: number;
  name: string;
  styles?: CSSProperties;
  [key: string]: any;
  children?: React.ReactNode;
}

export interface Component {
  id: number;
  name: string;
  props: any;
  styles?: CSSProperties;
  children?: Component[];
  parentId?: number;
}

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

export interface Option {
  label: string;
  value: string;
}
