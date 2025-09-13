import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DynamicView from './dynamicView';
import { WorkOrderConfig } from '../../../template-manager/config-schema';
import { FormElementProps } from '../../components/FormElement';
import { ButtonProps } from '../../../../common/Button';

jest.mock('../../components/FormElement', () => ({
  __esModule: true,
  default: ({ type, label, id, placeholder, required }: FormElementProps) => (
    <input type="text" data-testid={id} placeholder={placeholder} />
  ),
}));

jest.mock('../../../../common/Button', () => ({
  __esModule: true,

  default: ({ onClick, children }: ButtonProps) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe('DynamicView', () => {
  const mockConfig: WorkOrderConfig = {
    templateName: 'Test Work Order',
    description: 'A simple template for testing purposes.',
    sections: [
      {
        groupName: 'Section One',
        fields: [
          {
            type: 'text-input',
            label: 'Text Field',
            id: 'text-field-1',
            placeholder: 'Enter text',
            required: true,
          },
        ],
      },
      {
        groupName: 'Section Two',
        fields: [
          {
            type: 'number-input',
            label: 'Number Field',
            id: 'number-field-1',
            placeholder: 'Enter number',
            required: false,
          },
        ],
      },
    ],
  };

  it('renders correctly with a valid configuration', () => {
    render(<DynamicView config={mockConfig} />);
    
    // Check if the template name and description are rendered
    expect(screen.getByText('Test Work Order')).toBeInTheDocument();
    expect(screen.getByText('A simple template for testing purposes.')).toBeInTheDocument();

    // Check if the section names are rendered
    expect(screen.getByText('Section One')).toBeInTheDocument();
    expect(screen.getByText('Section Two')).toBeInTheDocument();

    // Check if the form elements are rendered based on the config
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter number')).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByText('Submit Work Order')).toBeInTheDocument();
  });

  it('logs a message when the submit button is clicked', () => {
    // Mock console.log to confirm the function is called
    jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<DynamicView config={mockConfig} />);
    
    const submitButton = screen.getByText('Submit Work Order');
    fireEvent.click(submitButton);
    
    expect(console.log).toHaveBeenCalledWith('Work Order Submitted!');
  });
});
