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

export interface Option {
  label: string;
  value: string;
}
