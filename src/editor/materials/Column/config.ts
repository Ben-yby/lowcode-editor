import Column from ".";

export const ColumnConfig = {
  name: "Column",
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
      label: "Width",
      name: "width",
      type: "input"
    },
    {
      label: "Height",
      name: "height",
      type: "input"
    }
  ],
  component: Column
};
