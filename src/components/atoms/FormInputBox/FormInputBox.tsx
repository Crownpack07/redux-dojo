import classNames from "classnames";
import {
  Field,
  FieldInputProps,
  FormikHelpers,
  FormikState,
  FormikValues,
  getIn,
} from "formik";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import { CustomErrorMessage } from "../CustomErrorMessage/CustomErrorMessage";
import { preventNegativeKeyOnNumberInputHandler } from "../../../core/util/prevent-negative-input";

interface FormInputBoxProps {
  placeholder: string;
  name: string;
  debounceDuration?: number;
  label?: string;
  required?: boolean;
  type?: string;
  step?: string;
  prefix?: string;
  suffix?: string;
  minValue?: number;
  maxValue?: number;
  isDisabled?: boolean;
  maxCharacterLength?: number;
  allowNegativeKeyOnNumberInput?: boolean;
  showWarning?: boolean;
  warningMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputBoxComponentProps {
  field: FieldInputProps<string>;
  form: FormikState<FormikValues> & FormikHelpers<FormikValues>;
  isValidating: boolean;
  placeholder: string;
  debounceDuration?: number;
  type: string;
  step?: string;
  prefix?: string;
  suffix?: string;
  minValue: number;
  maxValue?: number;
  maxCharacterLength: number;
  allowNegativeKeyOnNumberInput: boolean;
  isDisabled?: boolean;
  showWarning: boolean;
  warningMessage: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function FormInputBox({
  name,
  placeholder,
  debounceDuration,
  label,
  required,
  type = "text",
  step,
  prefix,
  suffix,
  minValue = 0,
  maxValue,
  maxCharacterLength = 120,
  isDisabled,
  allowNegativeKeyOnNumberInput,
  showWarning,
  warningMessage,
  onChange,
}: FormInputBoxProps) {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-row">
        {label && <div className="font-medium">{label}&nbsp;</div>}
        {required && (
          <label className="text-xxs leading-5 font-normal italic text-gray-500 mb-1">
            (Required)
          </label>
        )}
      </div>

      <Field
        name={name}
        component={InputBoxComponent}
        placeholder={placeholder}
        debounceDuration={debounceDuration}
        type={type}
        step={step}
        prefix={prefix}
        suffix={suffix}
        minValue={minValue}
        maxValue={maxValue}
        maxCharacterLength={maxCharacterLength}
        isDisabled={isDisabled}
        allowNegativeKeyOnNumberInput={allowNegativeKeyOnNumberInput}
        showWarning={showWarning}
        warningMessage={warningMessage}
        onChange={onChange}
      />
    </div>
  );
}

function InputBoxComponent({
  field: { name, value, ...field },
  form: { setFieldValue, errors, touched, isValidating },
  placeholder,
  debounceDuration,
  type,
  step,
  prefix,
  suffix,
  minValue,
  maxValue,
  isDisabled,
  maxCharacterLength,
  allowNegativeKeyOnNumberInput,
  showWarning,
  onChange,
}: InputBoxComponentProps) {
  const displayError =
    !isValidating &&
    getIn(errors, name) !== undefined &&
    getIn(touched, name) !== undefined;

  const debounceDurationFallback = 300;
  const [text, setText] = useState("");

  const handleInputChange = (newValue: string) => {
    setFieldValue(name, newValue);
  };

  const customDebounce = useCallback(
    debounce((newValue: string) => {
      return handleInputChange(newValue);
    }, debounceDuration || debounceDurationFallback),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    event.preventDefault();
    const newValue = event.target.value;

    setText(newValue);

    if (debounceDuration) {
      customDebounce(newValue);
    } else {
      handleInputChange(newValue);
    }
  };

  useEffect(() => {
    if (value !== text) {
      setText(value);
    }
  }, [value, text]);

  const ipreventNegativeKeyOnNumberInputHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    preventNegativeKeyOnNumberInputHandler(
      type,
      event,
      allowNegativeKeyOnNumberInput
    );
  };

  return (
    <div>
      <div className="relative flex items-stretch flex-grow shadow-sm rounded-md">
        <div className="relative flex flex-grow">
          {prefix && (
            <span className="px-2 flex items-center text-gray-500 border border-gray-300 rounded-l-md border-r-0 bg-gray-50">
              {prefix}
            </span>
          )}
          <InputBox
            name={name}
            type={type}
            step={step}
            {...field}
            value={text || ""}
            min={minValue}
            max={maxValue}
            isDisabled={isDisabled}
            maxLength={maxCharacterLength}
            onKeyPress={ipreventNegativeKeyOnNumberInputHandler}
            onChange={handleChange}
            className={classNames(
              { "border-red-300": displayError },
              { "border-orange-400": showWarning && !displayError },
              { "rounded-l-none z-10": prefix },
              { "rounded-r-none z-10": suffix }
            )}
            placeholder={placeholder}
          />
        </div>
        {suffix && (
          <div className="px-2 flex items-center text-gray-500 border border-gray-300 rounded-r-md border-l-0 bg-gray-50">
            <div>{suffix}</div>
          </div>
        )}
      </div>
      <div>
        <CustomErrorMessage
          name={name}
          isValidating={isValidating}
        ></CustomErrorMessage>
      </div>
    </div>
  );
}
