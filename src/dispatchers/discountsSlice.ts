import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store.ts';
import { Options } from '@/shared/constants.ts';

interface IDiscountState {
  selectedOption: string;
  discountCode: string;
  note: string;
  options: string[];
}

const initialState: IDiscountState = {
  selectedOption: 'Option A',
  discountCode: '',
  note: '',
  options: Options,
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
export const { setSelectedOption, setDiscountCode, setNote } =
  discountSlice.actions;

export const selectedOptions = (state: RootState) =>
  state.discounts.selectedOption;
export const selectDiscountCode = (state: RootState) =>
  state.discounts.discountCode;
export const selectNote = (state: RootState) => state.discounts.note;
export const selectOptions = (state: RootState) => state.discounts.options;
