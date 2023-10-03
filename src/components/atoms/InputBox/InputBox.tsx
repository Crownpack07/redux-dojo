import classNames from "classnames";

interface InputBoxProps {
  placeholder: string;
  name: string;
  value: string | number;
  min?: number;
  max?: number;
  maxLength?: number;
  type?: string;
  step?: string;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export function InputBox({
  name,
  placeholder,
  className,
  type,
  step,
  value,
  min,
  max,
  maxLength,
  isDisabled = false,
  onChange,
  onKeyPress,
}: InputBoxProps) {
  return (
    <div className="flex flex-col flex-grow">
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        step={step}
        className={classNames(
          `focus:ring-1 focus:ring-blue-500 border border-gray-300 block w-full rounded-md sm:text-sm p-2 placeholder:text-gray-500 text-gray-900`,
          className
        )}
        value={value}
        min={min}
        max={max}
        disabled={isDisabled}
        maxLength={maxLength}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
