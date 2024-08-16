import Section from ".";

export const SectionConfig = {
  name: "Section",
  defaultProps: {},
  styles: {
    width: "100%",
    minHeight: "100px",
    height: "auto",
    padding: "10px",
    flexDirection: "row" as any
  },
  stylesSetter: [
    {
      label: "Direction",
      name: "flexDirection",
      type: "select",
      options: [
        { label: "Row", value: "row" },
        { label: "Row reverse", value: "row-reverse" },
        { label: "Column", value: "column" },
        { label: "Column reverse", value: "column-reverse" }
      ]
    },
    {
      label: "Gap",
      name: "gap",
      type: "input"
    },
    {
      label: "Width",
      name: "width",
      type: "input"
    },
    {
      label: "Height",
      name: "height",
      type: "input"
    },
    {
      label: "Margin",
      name: "margin",
      type: "input"
    },
    {
      label: "Padding",
      name: "padding",
      type: "input"
    }
  ],
  component: Section
};
