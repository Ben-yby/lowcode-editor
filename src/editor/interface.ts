import { PropsWithChildren, CSSProperties } from "react";

export interface CommonComponentProps extends PropsWithChildren {
  id: number;
  name: string;
  styles?: CSSProperties;
  [key: string]: any;
}

export interface Component {
  id: number;
  name: string;
  props: any;
  styles?: CSSProperties;
  children?: Component[];
  parentId?: number;
}
