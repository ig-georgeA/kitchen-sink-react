import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RouteDetails from './route-details';
import 'element-internals-polyfill';

test('renders RouteDetails component', () => {
  const wrapper = render(<RouteDetails />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});