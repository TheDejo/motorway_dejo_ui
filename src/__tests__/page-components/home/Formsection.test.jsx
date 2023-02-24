import React from 'react';
import { render, fireEvent,  } from '@testing-library/react';
import FormSection from '../../../page-components/home/FormSection';

describe('Form', () => {
  let component;
  let form;

  beforeAll(() => {
    component = render(<FormSection />);
    form = component.container.querySelector('form');
  });


  it('displays errors for invalid data', () => {
    fireEvent.submit(form);
    const errorTextMatcher = (content, element) => {
      const hasText = (node) => node.textContent.match(/name is required/i);
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    };
    expect(component.getByText(errorTextMatcher)).toBeInTheDocument();
  });

  it('submits the form with valid data', () => {
    const { getByLabelText, getByTestId } = render(<FormSection />);
    fireEvent.change(getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/Date of birth/i), { target: { value: '1990-01-01' } });
    fireEvent.change(getByLabelText(/Favourite color/i), { target: { value: 'blue' } });
    fireEvent.change(getByLabelText(/Salary/i), { target: { value: '50000' } });
    fireEvent.click(getByTestId('submit-button'));
    const name = getByLabelText(/Name/i);
    const email = getByLabelText(/Email/i);
    const dob = getByLabelText(/Date of birth/i);
    const color = getByLabelText(/Favourite color/i);
    const salary = getByLabelText(/Salary/i);
    expect(name.value).toBe('John Doe');
    expect(email.value).toBe('john@example.com');
    expect(dob.value).toBe('1990-01-01');
    expect(color.value).toBe('blue');
    expect(salary.value).toBe('50000');
  });

});
