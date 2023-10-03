import { useAppSelector } from "../../../core/app/store";
import { CustomContentContainer } from "../../atoms/CustomContentContainer/CustomContentContainer";
import { DefaultTable } from "../../atoms/Table/Table";
import { TitleTextBlock } from "../../atoms/TitleTextBlock/TitleTextBlock";
import { StepButtons, StepButtonsProps } from "../../stepper";
// import { VendorFormValues } from "../models/VendorFormValues";
// import { VendorLocation } from "../models/VendorLocation";

// const vendor: VendorFormValues = {
//   companyName: "Norris & Co",
//   contactNumber: "011560780",
//   Email: "chuck@norris.com",
//   streetAddress: "Norris Lane",
//   city: "Pretoria",
//   country: "South Africa",
// };

// const tempVendorLocations: VendorLocation[] = [
//   {
//     location: "George",
//     name: "Pick @ George",
//     numberOfEmployees: "100",
//   },
//   {
//     location: "George",
//     name: "Pick @ George",
//     numberOfEmployees: "100",
//   },
// ];

export function VendorReview({
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  onFinish,
  onCancel,
}: StepButtonsProps) {
  const vendor = useAppSelector((state) => state.vendor);
  return (
    <>
      <CustomContentContainer>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold"> Vendor Details </div>
          <div className="grid grid-cols-4 gap-2">
            <TitleTextBlock label={vendor.companyName} title={"Company Name"} />
            <TitleTextBlock
              label={vendor.contactNumber}
              title={"Company Number"}
            />
            <TitleTextBlock label={vendor.Email} title={"Company Email"} />
          </div>
          <hr />
          <div className="font-bold">Address</div>
          <div className="grid grid-cols-4 gap-2">
            <TitleTextBlock
              label={vendor.streetAddress}
              title={"Street Address"}
            />
            {vendor.addressLine2 && (
              <TitleTextBlock
                label={vendor.addressLine2}
                title={"Street Address Line 2"}
              />
            )}
            <TitleTextBlock label={vendor.city} title={"City"} />
            <TitleTextBlock label={vendor.country} title={"Country"} />
          </div>
          <hr />
        </div>
        <div className="pt-4 font-bold">Locations</div>
        <DefaultTable
          rows={vendor.locations.map((location) => {
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
