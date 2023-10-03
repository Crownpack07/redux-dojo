import classNames from "classnames";
import { ButtonType } from "./button-type";

export const buttonStyles = (buttonType: ButtonType, extraStyles = "") =>
  classNames(
    "inline-flex justify-center py-2 px-3 text-sm font-medium rounded-md transition-colors w-full select-none",
    extraStyles,
    {
      "text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-400 disabled:opacity-50":
        buttonType === "primary",
      "text-blue-900 bg-gray-100 hover:bg-gray-200 active:bg-gray-50 disabled:opacity-50":
        buttonType === "secondary",
    }
  );
