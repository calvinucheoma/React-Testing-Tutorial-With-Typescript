import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0'); //h1 tag renders a count value of 0 by default. Make sure it is a string
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    // user.setup(); //creates an instance of the user event

    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await userEvent.click(incrementButton);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    // await userEvent.dblClick(incrementButton);
    for (let i = 1; i < 3; i++) {
      await userEvent.click(incrementButton);
    }

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', { name: 'Set' });
    await userEvent.click(setButton);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    //tab key focuses the increment button then the input field when clicked again and then the set button when clicked again

    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', { name: 'Set' });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });

  //clear Utility API
  test('clear', async () => {
    render(<textarea defaultValue="Hello there!" />);
    const textareaElement = screen.getByRole('textbox');
    await userEvent.clear(textareaElement);
    expect(textareaElement).toHaveValue('');
  });

  //selectOptions Utility API
  test('selectOptions', async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    const selectElement = screen.getByRole('listbox');
    await userEvent.selectOptions(selectElement, ['1', '3']);

    const optionElementA = screen.getByRole('option', {
      name: 'A',
    }) as HTMLOptionElement; //without adding this typescript type, typescript flags the 'selected' property as an error
    expect(optionElementA.selected).toBe(true);

    const optionElementB = screen.getByRole('option', {
      name: 'B',
    }) as HTMLOptionElement;
    expect(optionElementB.selected).toBe(false);

    const optionElementC = screen.getByRole('option', {
      name: 'C',
    }) as HTMLOptionElement;
    expect(optionElementC.selected).toBe(true);
  });

  //deselectOptions Utility API
  test('deselectOptions', async () => {
    render(
      <select multiple>
        <option value="4">D</option>
        <option value="5" selected>
          E
        </option>
        <option value="6">F</option>
      </select>
    );
    const selectElement = screen.getByRole('listbox');
    await userEvent.deselectOptions(selectElement, '5');

    const optionElement = screen.getByRole('option', {
      name: 'E',
    }) as HTMLOptionElement;
    // expect(optionElement).not.toHaveAttribute('selected');
    expect(optionElement.selected).toBe(false);
  });

  // upload Utility API
  test('upload file', async () => {
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input type="file" id="file-uploader" />
      </div>
    );
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = screen.getByLabelText(/upload file/i) as HTMLInputElement;

    await userEvent.upload(input, file);

    // Check if input.files is not null before accessing its properties
    expect(input.files).not.toBeNull();

    // Now TypeScript recognizes the input.files property
    expect(input.files![0]).toBe(file); // Use ! to assert that input.files is not null
    expect(input.files!.item(0)).toBe(file); // Use ! to assert that input.files is not null
    expect(input.files!.length).toBe(1); // Use ! to assert that input.files is not null
  });
});
