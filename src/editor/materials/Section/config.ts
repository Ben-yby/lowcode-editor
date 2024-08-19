import { Direction, Gap, Height, Width } from "@/constant";
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
  stylesSetter: [Direction, Gap, Width, Height],
  component: Section
};
