import { Direction, Gap, Height, Margin, Padding, Width } from "@/constant";
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
  stylesSetter: [Direction, Gap, Margin, Padding, Width, Height],
  component: Column
};
