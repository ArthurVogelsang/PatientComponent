import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SearchInput from 'components/SearchInput'

const renderComponent = () =>
  render(
    <SearchInput
      value='init'
      onChange={() => jest.fn()}
    />
  );

describe('SearchInput', () => {
  it('should have a placeholder', () => {
    const { getByPlaceholderText } = renderComponent()
    expect(getByPlaceholderText('Search for patients, and more')).toBeDefined()
  });

  it('should have a value', async () => {
    const handle = jest.fn()
    const { getByDisplayValue } = renderComponent();

    expect(getByDisplayValue('init')).toBeDefined()
  });
})