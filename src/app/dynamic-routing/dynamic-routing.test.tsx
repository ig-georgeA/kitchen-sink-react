import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DynamicRouting from './dynamic-routing';
import 'element-internals-polyfill';

test('renders DynamicRouting component', () => {
  const wrapper = render(<DynamicRouting />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});