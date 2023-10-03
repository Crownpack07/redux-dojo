import { Form, Formik } from "formik";
import { CustomContentContainer } from "../../atoms/CustomContentContainer/CustomContentContainer";
import { FormInputBox } from "../../atoms/FormInputBox/FormInputBox";
import { VendorFormValues } from "../models/VendorFormValues";
import { StepButtons, StepButtonsProps } from "../../stepper";
import { setVendorDetails } from "../state/vendor-slice";
import { useAppDispatch } from "../../../core/app/store";

export const companyNameKey: keyof VendorFormValues = "companyName";
export const contactNumberKey: keyof VendorFormValues = "contactNumber";
export const emailKey: keyof VendorFormValues = "Email";
export const streetAddressKey: keyof VendorFormValues = "streetAddress";
export const addressLine2Key: keyof VendorFormValues = "addressLine2";
export const cityKey: keyof VendorFormValues = "city";
export const countryKey: keyof VendorFormValues = "country";

const initialValues: VendorFormValues = {
  companyName: "",
  contactNumber: "",
  Email: "",
  streetAddress: "",
  addressLine2: "",
  city: "",
  country: "",
};

export function VendorForm({
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  onFinish,
  onCancel,
}: StepButtonsProps) {
  const dispatch = useAppDispatch();
  const onSubmit = (values: VendorFormValues) => {
    dispatch(
      setVendorDetails({
        ...values,
      })
    );
    console.info(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ submitForm }) => (
        <Form>
          <CustomContentContainer>
            <div className="flex flex-col gap-y-4">
              <div className="font-bold">Vendor Details</div>
              <hr />
              <div className="grid grid-cols-2 gap-4">
                <FormInputBox
                  name={companyNameKey}
                  label="Company Name"
                  placeholder="Enter Company Name"
                />
                <FormInputBox
                  name={contactNumberKey}
                  label="Contact Number"
                  placeholder="000 000 0000"
                />
                <FormInputBox
                  name={emailKey}
                  label="Company Email"
                  placeholder="Enter Company Email"
                />
              </div>
              <div className="font-bold">Office Address</div>
              <hr />
              <FormInputBox
                name={streetAddressKey}
                label="Street Address"
                placeholder=""
              />
              <FormInputBox
                name={addressLine2Key}
                label="Street Address Line 2"
                placeholder=""
              />
              <div className="grid grid-cols-2 gap-4">
                <FormInputBox name={cityKey} label="City" placeholder="" />
                <FormInputBox
                  name={countryKey}
                  label="Country"
                  placeholder=""
                />
              </div>
            </div>
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
      )}
    </Formik>
  );
}
