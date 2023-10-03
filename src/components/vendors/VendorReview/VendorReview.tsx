import { CustomContentContainer } from "../../atoms/CustomContentContainer/CustomContentContainer";
import { DefaultTable } from "../../atoms/Table/Table";
import { TitleTextBlock } from "../../atoms/TitleTextBlock/TitleTextBlock";
import { StepButtons, StepButtonsProps } from "../../stepper";
import { VendorFormValues } from "../models/VendorFormValues";
import { VendorLocation } from "../models/VendorLocation";

const tempVendorDetails: VendorFormValues = {
  companyName: "Norris & Co",
  contactNumber: "011560780",
  Email: "chuck@norris.com",
  streetAddress: "Norris Lane",
  city: "Pretoria",
  country: "South Africa",
};

const tempVendorLocations: VendorLocation[] = [
  {
    location: "George",
    name: "Pick @ George",
    numberOfEmployees: "100",
  },
  {
    location: "George",
    name: "Pick @ George",
    numberOfEmployees: "100",
  },
];

export function VendorReview({
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  onFinish,
  onCancel,
}: StepButtonsProps) {
  return (
    <>
      {" "}
      <CustomContentContainer>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold"> Vendor Details </div>
          <div className="grid grid-cols-4 gap-2">
            <TitleTextBlock
              label={tempVendorDetails.companyName}
              title={"Company Name"}
            />
            <TitleTextBlock
              label={tempVendorDetails.contactNumber}
              title={"Company Number"}
            />
            <TitleTextBlock
              label={tempVendorDetails.Email}
              title={"Company Email"}
            />
          </div>
          <hr />
          <div className="font-bold">Address</div>
          <div className="grid grid-cols-4 gap-2">
            <TitleTextBlock
              label={tempVendorDetails.streetAddress}
              title={"Street Address"}
            />
            {tempVendorDetails.addressLine2 && (
              <TitleTextBlock
                label={tempVendorDetails.addressLine2}
                title={"Street Address Line 2"}
              />
            )}
            <TitleTextBlock label={tempVendorDetails.city} title={"City"} />
            <TitleTextBlock
              label={tempVendorDetails.country}
              title={"Country"}
            />
          </div>
          <hr />
        </div>
        <div className="pt-4 font-bold">Locations</div>
        <DefaultTable
          rows={tempVendorLocations.map((location) => {
            return {
              name: location.name,
              employed: location.numberOfEmployees,
              location: location.location,
            };
          })}
        />
        <StepButtons
          onNext={onNext}
          onPrev={onPrev}
          onCancel={onCancel}
          onFinish={onFinish}
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
        />
      </CustomContentContainer>
    </>
  );
}
