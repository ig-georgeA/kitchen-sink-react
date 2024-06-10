import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FinancialChart from './financial-chart';
import 'element-internals-polyfill';

test('renders FinancialChart component', () => {
  const wrapper = render(<FinancialChart />);
  expect(wrapper).toBeTruthy();
});