import { Margin, Padding, Width, Height, Direction, Gap } from "@/editor/constant";
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
  stylesSetter: [Direction, Gap, Margin, Padding, Width, Height],
  component: Section
};
