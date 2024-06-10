import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import TabLayout from './tab-layout';
import 'element-internals-polyfill';

test('renders TabLayout component', () => {
  const wrapper = render(<TabLayout />);
  expect(wrapper).toBeTruthy();
});