import { Spacing, Direction, Gap, Height, Width } from "@/constant";
import Column from ".";

export const ColumnConfig = {
  name: "Column",
  defaultProps: {},
  styles: {
    width: "100%",
    minHeight: "100px",
    height: "auto",
    flexDirection: "row" as any
  },
  stylesSetter: [Direction, Gap, Width, Height, Spacing],
  component: Column
};
