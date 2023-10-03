import * as React from "react";
import { ButtonType } from "./button-type";
import { buttonStyles } from "./button-styles";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Button label
   */
  label: string;
  /**
   * Button style
   */
  buttonType?: ButtonType;
}

export default function Button({
  label,
  className,
  buttonType = ButtonType.Primary,
  onClick,
  ...props
}: IButtonProps) {
  return (
    <button
      className={buttonStyles(buttonType, className)}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...props}
    >
      {label}
    </button>
  );
}
