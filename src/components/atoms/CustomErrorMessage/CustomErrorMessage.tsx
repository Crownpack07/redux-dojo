import { ErrorMessage } from "formik";

interface ICustomErrorMessageProps {
  name: string;
  isValidating: boolean;
  message?: string;
}

export function CustomErrorMessage({
  name,
  isValidating,
  message,
}: ICustomErrorMessageProps) {
  if (isValidating) {
    return null;
  }
  return (
    <ErrorMessage name={name}>
      {(error) => (
        <label
          data-testid={`error-${name}`}
          className="text-xs text-red-700 mt-1"
        >
          {message || error}
        </label>
      )}
    </ErrorMessage>
  );
}
