import React, { useState } from 'react';

/**
 * Props for the SafetyInstructions component.
 * It uses the ComponentField interface from the config schema.
 */
export interface SafetyInstructionsProps {
  label: string;
  instructions: string[];
}

const SafetyInstructions: React.FC<SafetyInstructionsProps> = ({ label, instructions }) => {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleAcknowledgement = () => {
    setAcknowledged(!acknowledged);
  };

  return (
    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938-3h13.856c.465 0 .894.24.997.643l.006.012a1.002 1.002 0 01-.894 1.353l-13.856.002c-.465 0-.894-.24-.997-.643a1.002 1.002 0 01.894-1.353l.002.001z" />
        </svg>
        <h3 className="text-lg font-semibold text-yellow-800">{label}</h3>
      </div>
      <ul className="list-disc list-inside mt-2 text-yellow-700 space-y-1">
        {instructions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center">
        <input
          id="acknowledge"
          type="checkbox"
          checked={acknowledged}
          onChange={handleAcknowledgement}
          className="form-checkbox h-4 w-4 text-yellow-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="acknowledge" className="ml-2 block text-sm font-medium text-gray-700">
          I have read and understood the above instructions.
        </label>
      </div>
    </div>
  );
};

export default SafetyInstructions;