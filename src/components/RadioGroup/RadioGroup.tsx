import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/hooks.ts';
import { selectedOptions, selectOptions, setSelectedOption } from '@/dispatchers/discountsSlice.ts';

const RadioGroup: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useAppSelector(selectedOptions);
  const options = useAppSelector(selectOptions);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(e.target.value));
  };

  return (
    <div className="w-full">
      <p className="text-lg font-semibold mb-2">Select an Option:</p>
      <div className="flex flex-col justify-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="form-radio text-blue-500 cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
