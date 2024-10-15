import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  isLoading: boolean;
  toast: {
    duration?: number;
    type?: string;
    show: boolean;
    title?: string;
    message: string;
  };
}

const initialState: CommonState = {
  isLoading: false,
  toast: {
    duration: 3000,
    show: false,
    message: "",
  },
};

export const commonSlices = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload;
    },
    setToast: (
      state,
      action: PayloadAction<{
        title?: string;
        message: string;
        show: boolean;
        duration?: number;
        type?: "success" | "error";
      }>
    ) => {
      state.toast = { ...initialState.toast, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setToast } = commonSlices.actions;

export default commonSlices.reducer;
