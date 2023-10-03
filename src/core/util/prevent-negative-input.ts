export function preventNegativeKeyOnNumberInputHandler(
  inputType: string,
  event: React.KeyboardEvent<HTMLInputElement>,
  allowNegativeKeyOnNumberInput: boolean
) {
  if (
    inputType === "number" &&
    event.key === "-" &&
    !allowNegativeKeyOnNumberInput
  ) {
    event.preventDefault();
    return true;
  }
  return false;
}
