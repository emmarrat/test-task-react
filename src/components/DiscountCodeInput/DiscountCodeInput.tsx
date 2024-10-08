import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectDiscountCode,
  setDiscountCode,
} from '@/dispatchers/discountsSlice.ts';
import { Discount, DiscountPattern } from '@/shared/constants.ts';

export const DiscountCodeInput: React.FC = () => {
  const dispatch = useDispatch();
  const discountCode = useSelector(selectDiscountCode);

  const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountCode(e.target.value));
  };

  const validateDiscountCode = (code: string): boolean => {
    return DiscountPattern.test(code);
  };

  const getBorderColor = () => {
    if (discountCode.length === 0 || validateDiscountCode(discountCode)) {
      return 'border-gray-300';
    }
    return 'border-red-500';
  };

  return (
    <div className='w-full'>
      <p className='text-lg font-semibold mb-2'>Enter Discount Code:</p>
      <input
        type='text'
        value={discountCode}
        onChange={handleDiscountCodeChange}
        placeholder='Enter code'
        className={`mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${getBorderColor()}`}
      />
      {!!discountCode.length &&
        (validateDiscountCode(discountCode) ? (
          <p className='text-green-500 text-sm mt-1'>Valid discount code!</p>
        ) : (
          <p className='text-red-500 text-sm mt-1'>
            Invalid discount code. Try something like: {Discount}
          </p>
        ))}
    </div>
  );
};
