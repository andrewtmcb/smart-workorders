import React from 'react';
import { ComponentField } from '../../template-manager/config-schema';

export interface FormElementProps extends ComponentField {}

const FormElement: React.FC<FormElementProps> = ({ type, label, id, placeholder, required, options }) => {
  let inputElement;

  // Render different HTML inputs based on the component type from the config
  switch (type) {
    case 'select-input':
      inputElement = (
        <select
          id={id}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required={required}
        >
          {options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
      break;
    default:
      // Handles 'text-input', 'number-input', 'date-picker', etc.
      // Now, we map the schema type directly to the correct HTML type.
      let htmlInputType = 'text';
      if (type === 'number-input') {
        htmlInputType = 'number';
      } else if (type === 'date-picker') {
        htmlInputType = 'date';
      }

      inputElement = (
        <input
          type={htmlInputType}
          id={id}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder={placeholder}
          required={required}
        />
      );
      break;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {inputElement}
    </div>
  );
};

export default FormElement;