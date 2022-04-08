import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import PatientsList from 'templates/PatientsList'

const renderComponent = () =>
  render(
    <PatientsList />
  );

describe('PatientsList', () => {
  it('should have a date', () => {
    const { getAllByText } = renderComponent()
    expect(getAllByText(/April/)[0]).toBeDefined()
  });

  it('should have a patient card', async () => {
    const { getAllByTestId } = renderComponent();

    expect(getAllByTestId('patient-card')[0]).toBeDefined()
  });

  it('should have a search', async () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('input')).toBeDefined()
  });
})