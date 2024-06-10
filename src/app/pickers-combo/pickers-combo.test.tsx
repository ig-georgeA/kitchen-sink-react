import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import PickersCombo from './pickers-combo';
import 'element-internals-polyfill';

test('renders PickersCombo component', () => {
  const wrapper = render(<PickersCombo />);
  expect(wrapper).toBeTruthy();
});