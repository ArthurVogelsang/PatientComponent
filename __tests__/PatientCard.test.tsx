import React from 'react'
import { render } from '@testing-library/react'
import PatientCard from 'ui/PatientCard'

const renderComponent = () =>
  render(
    <PatientCard
      item={{
        "name": "Jane Doe",
        "date": 1648796400,
        "image": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      }}
    />
  );

describe('PatientCard', () => {
  it('should have a name', () => {
    const { getByText } = renderComponent();
    expect(getByText('Jane Doe')).toBeDefined();
  });

  it('should have a avatar', () => {
    const { getByAltText } = renderComponent();
    expect(getByAltText('avatar')).toBeDefined();
  });

  it('should have a past time', () => {
    const { getByText } = renderComponent();
    expect(getByText(/ago/)).toBeDefined();
  });

})