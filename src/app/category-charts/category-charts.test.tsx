import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CategoryCharts from './category-charts';
import 'element-internals-polyfill';

test('renders CategoryCharts component', () => {
  const wrapper = render(<CategoryCharts />);
  expect(wrapper).toBeTruthy();
});