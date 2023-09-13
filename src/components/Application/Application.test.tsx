import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // const headerElementH1 = screen.getByRole('heading', {
    //   name: 'Job application form',
    // });
    // expect(headerElementH1).toBeInTheDocument();

    // const headerElementH2 = screen.getByRole('heading', {
    //   name: 'Section 1',
    // });
    // expect(headerElementH2).toBeInTheDocument();

    const headerElementH1 = screen.getByRole('heading', {
      level: 1,
    });
    expect(headerElementH1).toBeInTheDocument();

    const headerElementH2 = screen.getByRole('heading', {
      level: 2,
    });
    expect(headerElementH2).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const spanElement = screen.getByTitle('close');
    expect(spanElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const divElement = screen.getByTestId('custom-element');
    expect(divElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: 'Name' });
    expect(inputElement).toBeInTheDocument();

    const inputElement2 = screen.getByLabelText('Name', { selector: 'input' });
    expect(inputElement2).toBeInTheDocument();

    const inputElement3 = screen.getByPlaceholderText('Fullname');
    expect(inputElement3).toBeInTheDocument();

    const inputElement4 = screen.getByDisplayValue('Chukwuma');
    expect(inputElement4).toBeInTheDocument();

    const textAreaElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(textAreaElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const checkBoxElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(checkBoxElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
