import { Component } from "../editor/interface";

export * from "./StylesSetter";

export const ComponentsJson: Component[] = [
  {
    id: 1,
    name: "Page",
    props: {},
    children: [
      {
        id: 1723793071268,
        name: "Section",
        props: {},
        styles: {
          width: "100%",
          minHeight: "100px",
          height: "auto",
          flexDirection: "row",
          gap: "2%"
        },
        parentId: 1,
        children: [
          {
            id: 1723793115460,
            name: "Column",
            props: {},
            styles: {
              width: "100%",
              minHeight: "100px",
              height: "auto",
              flexDirection: "row"
            },
            parentId: 1723793071268
          }
        ]
      }
    ]
  }
];
