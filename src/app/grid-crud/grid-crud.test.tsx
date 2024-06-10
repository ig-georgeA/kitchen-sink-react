import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import GridCRUD from './grid-crud';
import 'element-internals-polyfill';

test('renders GridCRUD component', () => {
  const wrapper = render(<GridCRUD />);
  expect(wrapper).toBeTruthy();
});