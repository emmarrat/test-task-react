import RadioGroup from '@/components/RadioGroup/RadioGroup.tsx';
import DiscountCodeInput from '@/components/DiscountCodeInput/DiscountCodeInput.tsx';

const Discounts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-md">
        <RadioGroup />
        <DiscountCodeInput/>
      </div>
    </div>
  );
};

export default Discounts;