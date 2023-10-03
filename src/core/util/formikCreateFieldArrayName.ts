export function formikCreateFieldArrayName(
  arrayKey: string,
  index: number,
  fieldKey: string
) {
  const result = `${arrayKey}[${index}].${fieldKey}`;
  return result;
}
