import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the "learn more about the project" link', () => {
  // Render the App component
  render(<App />);

  // Find the anchor element with the text "learn more about the project"
  const linkElement = screen.getByText(/learn more about the project/i);

  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
