import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import ExpansionPanelsTree from './expansion-panels-tree';
import 'element-internals-polyfill';

test('renders ExpansionPanelsTree component', () => {
  const wrapper = render(<ExpansionPanelsTree />);
  expect(wrapper).toBeTruthy();
});