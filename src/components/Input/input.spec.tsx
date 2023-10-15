import { screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import theme from 'styles/theme';
import { renderWithTheme } from '@utils/tests/helpers';
import userEvent from '@testing-library/user-event';
import Input from '.';

const errorText = 'This field is required';

describe('Input component', () => {
  const handleSubmit = jest.fn();
  beforeEach(() => {
    renderWithTheme(
      <Formik initialValues={{ test: '' }} onSubmit={handleSubmit}>
        <Form>
          <Input name='test' label='Test Label' id='test-input' />
        </Form>
      </Formik>,
    );
  });

  it('renders without errors', () => {
    const inputElement = screen.getByLabelText('Test Label');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    const { getByText } = renderWithTheme(
      <Formik initialValues={{ test: '' }} onSubmit={handleSubmit}>
        <Form>
          <Input
            error={errorText}
            name='test'
            label='Test Label'
            id='test-input'
          />
        </Form>
      </Formik>,
    );

    const errorMessage = getByText(errorText);
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display an error message when the field is valid', async () => {
    const user = userEvent.setup();
    const inputElement = screen.getByLabelText('Test Label');

    await user.type(inputElement, 'test');

    const errorMessage = screen.queryByText('This field is required');
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('does not apply error styles when the field is valid', async () => {
    const user = userEvent.setup();
    const inputElement = screen.getByLabelText('Test Label');

    await user.type(inputElement, 'test');

    expect(inputElement).toHaveStyle(`border: 1px solid ${theme.colors.gray}`);
  });
});
