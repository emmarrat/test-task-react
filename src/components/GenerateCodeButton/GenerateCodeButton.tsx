import React, { useState } from 'react';
import { NewCode } from '@/shared/constants.ts';

const GenerateCodeButton: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>('');

  const handleGenerateCode = () => {
    setGeneratedCode(prevGeneratedCode => prevGeneratedCode.length > 0 ? '' : NewCode);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={handleGenerateCode}
        className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        {generatedCode.length > 0 ? 'Clear' : 'Generate Code'}
      </button>
      {generatedCode && (
        <p className="mt-3 text-green-500">Generated Code: {generatedCode}</p>
      )}
    </div>
  );
};

export default GenerateCodeButton;
