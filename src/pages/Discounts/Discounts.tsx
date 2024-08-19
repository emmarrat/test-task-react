import { DiscountCodeInput, GenerateCodeButton, NoteField, RadioGroup } from '@/components';

export const Discounts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-3">
      <div className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-md md:max-w-2xl lg:max-w-3xl border md:border md:border-gray-300">
        <RadioGroup />
        <DiscountCodeInput />
        <GenerateCodeButton />
        <NoteField />
      </div>
    </div>
  );
};