import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import GridWithTemplates from './grid-with-templates';
import 'element-internals-polyfill';

test('renders GridWithTemplates component', () => {
  const wrapper = render(<GridWithTemplates />);
  expect(wrapper).toBeTruthy();
});