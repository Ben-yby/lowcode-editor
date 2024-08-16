import { Component } from "../interface";

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
          padding: "10px",
          flexDirection: "row",
          gap: "2%"
        },
        parentId: 1,
        children: [
          {
            id: 1723793073267,
            name: "Section",
            props: {},
            styles: {
              width: "50%",
              minHeight: "100px",
              height: "auto",
              padding: "10px",
              flexDirection: "row",
              gap: ""
            },
            parentId: 1723793071268,
            children: [
              {
                id: 1723793115460,
                name: "Column",
                props: {},
                styles: {
                  width: "100%",
                  minHeight: "100px",
                  height: "auto",
                  padding: "10px",
                  flexDirection: "row"
                },
                parentId: 1723793073267
              }
            ]
          },
          {
            id: 1723793085272,
            name: "Section",
            props: {},
            styles: {
              width: "50%",
              minHeight: "100px",
              height: "auto",
              padding: "10px",
              flexDirection: "row"
            },
            parentId: 1723793071268,
            children: [
              {
                id: 1723793118585,
                name: "Column",
                props: {},
                styles: {
                  width: "100%",
                  minHeight: "100px",
                  height: "auto",
                  padding: "10px",
                  flexDirection: "row"
                },
                parentId: 1723793085272
              }
            ]
          }
        ]
      }
    ]
  }
];
