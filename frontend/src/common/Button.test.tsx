import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This import provides the `toBeInTheDocument` matcher

import Button from './Button';

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Create a mock function
    render(<Button onClick={handleClick}>Test</Button>);

    // Find the button and simulate a click event
    const buttonElement = screen.getByRole('button', { name: 'Test' });
    fireEvent.click(buttonElement);

    // Expect the mock function to have been called exactly once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button onClick={() => {}} disabled={true}>Disabled</Button>);

    // Find the button by its text and check the 'disabled' attribute
    const buttonElement = screen.getByRole('button', { name: 'Disabled' });
    expect(buttonElement).toBeDisabled();
  });
});
