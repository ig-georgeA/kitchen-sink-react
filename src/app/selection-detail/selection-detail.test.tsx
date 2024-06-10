import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import SelectionDetail from './selection-detail';
import 'element-internals-polyfill';

test('renders SelectionDetail component', () => {
  const wrapper = render(<SelectionDetail />);
  expect(wrapper).toBeTruthy();
});