import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDiscountState {
  selectedOption: string;
  discountCode: string;
  note: string;
}

const initialState: IDiscountState = {
  selectedOption: 'Option A',
  discountCode: '',
  note: '',
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setDiscountCode: (state, action: PayloadAction<string>) => {
      state.discountCode = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const discountsReducer = discountSlice.reducer;
export const { setSelectedOption, setDiscountCode, setNote } = discountSlice.actions;
