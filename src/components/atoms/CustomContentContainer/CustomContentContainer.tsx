import classNames from "classnames";
import { ReactNode } from "react";

export interface CustomContentContainerProps {
  children: ReactNode;
  includeHeaderSpacing?: boolean;
  className?: string;
}

export function CustomContentContainer({
  children,
  className,
}: CustomContentContainerProps) {
  return (
    <div className={classNames("bg-white rounded-md p-4", className)}>
      {children}
    </div>
  );
}
