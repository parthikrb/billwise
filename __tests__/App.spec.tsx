import React from 'react';
import { render } from '@testing-library/react-native';
import { expect } from '@jest/globals';
import App from '../App';

it('should display the App page', () => {
  const { getByText } = render(<App />);
  expect(getByText('Open up App.tsx to start working on your app!')).toBeTruthy();
});
