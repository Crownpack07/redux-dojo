import { ReactNode } from "react";
import { StepButtonsProps } from "..";

export interface Step {
  name: string;
  component: (props: StepButtonsProps) => ReactNode;
}
