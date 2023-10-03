import { TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import { FieldArray, Form, Formik } from "formik";
import { formikCreateFieldArrayName } from "../../../core/util/formikCreateFieldArrayName";
import { CustomContentContainer } from "../../atoms/CustomContentContainer/CustomContentContainer";
import { FormInputBox } from "../../atoms/FormInputBox/FormInputBox";
import { StepButtons, StepButtonsProps } from "../../stepper";
import { VendorLocation } from "../models/VendorLocation";

export interface VendorLocationFormValues {
  locations: VendorLocation[];
}

export const locationsKey: keyof VendorLocationFormValues = "locations";
export const nameKey: keyof VendorLocation = "name";
export const locationKey: keyof VendorLocation = "location";
export const numberOfEmployeesKey: keyof VendorLocation = "numberOfEmployees";

const defaultLocation = {
  location: "",
  name: "",
  numberOfEmployees: "",
};

export function VendorLocationForm({
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  onFinish,
  onCancel,
}: StepButtonsProps) {
  const initialValues: VendorLocationFormValues = {
    locations: [defaultLocation],
  };

  const addLocation = (push: (obj: VendorLocation) => void) => {
    push(defaultLocation);
  };

  const onSubmit = (values: VendorLocationFormValues) => {
    console.info({ values });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, submitForm }) => {
        return (
          <Form>
            <CustomContentContainer>
              <FieldArray name={locationsKey}>
                {({ remove, push }) => (
                  <div className="space-y-2">
                    {values.locations.map((_location, index) => (
                      <div
                        key={index}
                        className="flex flex-grow items-center justify-between gap-x-4"
                      >
                        <div className="grid grid-cols-3 gap-4 col-span-9 w-full">
                          <FormInputBox
                            name={formikCreateFieldArrayName(
                              locationsKey,
                              index,
                              nameKey
                            )}
                            label="Location Name"
                            placeholder="Enter Location Name"
                          />
                          <FormInputBox
                            name={formikCreateFieldArrayName(
                              locationsKey,
                              index,
                              locationKey
                            )}
                            label="Location"
                            placeholder=""
                          />
                          <FormInputBox
                            name={formikCreateFieldArrayName(
                              locationsKey,
                              index,
                              numberOfEmployeesKey
                            )}
                            label="Number of Employees"
                            placeholder="0"
                          />
                        </div>
                        <div
                          className="cursor-pointer mt-6"
                          onClick={() => remove(index)}
                        >
                          <TrashIcon className="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                    ))}
                    <div className="flex xl:justify-start justify-center ">
                      <div
                        onClick={() => addLocation(push)}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <div>
                          <PlusIcon className="h-6 w-6 text-blue-500" />
                        </div>

                        <label className="text-altron-bold-blue-500 text-base font-medium cursor-pointer ml-2 flex xl:justify-start justify-center ">
                          Location
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
            </CustomContentContainer>
            <StepButtons
              onNext={() => {
                submitForm();
                onNext();
              }}
              onPrev={onPrev}
              onCancel={onCancel}
              onFinish={onFinish}
              isLastStep={isLastStep}
              isFirstStep={isFirstStep}
            />
          </Form>
        );
      }}
    </Formik>
  );
}
