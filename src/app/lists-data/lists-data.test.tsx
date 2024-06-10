import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ListsData from './lists-data';
import 'element-internals-polyfill';

test('renders ListsData component', () => {
  const wrapper = render(<ListsData />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});