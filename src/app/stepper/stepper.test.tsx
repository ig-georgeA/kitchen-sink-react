import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Stepper from './stepper';
import 'element-internals-polyfill';

test('renders Stepper component', () => {
  const wrapper = render(<Stepper />);
  expect(wrapper).toBeTruthy();
});