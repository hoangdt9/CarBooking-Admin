import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  profile: any;
  tokens: any;
}

const initialState: CommonState = {
  profile: null,
  tokens: null,
};

export const commonSlices = createSlice({
  name: "common",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setTokens: (state, action: PayloadAction<any>) => {
      state.tokens = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfile, setTokens } = commonSlices.actions;

export default commonSlices.reducer;
