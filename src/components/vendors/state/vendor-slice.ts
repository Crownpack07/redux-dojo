import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VendorLocation } from "../models/VendorLocation";
import { VendorFormValues } from "../models/VendorFormValues";

interface VendorState {
  companyName: string;
  contactNumber: string;
  Email: string;
  streetAddress: string;
  addressLine2?: string;
  city: string;
  country: string;
  locations: VendorLocation[];
}

const initialState: VendorState = {
  companyName: "",
  contactNumber: "",
  Email: "",
  streetAddress: "",
  addressLine2: "",
  city: "",
  country: "",
  locations: [],
};

export const vendorSlice = createSlice({
  name: "vendor-slice",
  initialState: initialState,
  reducers: {
    setVendorDetails(state, { payload }: PayloadAction<VendorFormValues>) {
      state.Email = payload.Email;
      state.companyName = payload.companyName;
      state.contactNumber = payload.contactNumber;
      state.streetAddress = payload.streetAddress;
      state.addressLine2 = payload.addressLine2;
      state.city = payload.city;
      state.country = payload.country;
    },
    setLocations(
      state,
      { payload }: PayloadAction<{ locations: VendorLocation[] }>
    ) {
      state.locations = payload.locations;
    },
  },
});

export const { setLocations, setVendorDetails } = vendorSlice.actions;
