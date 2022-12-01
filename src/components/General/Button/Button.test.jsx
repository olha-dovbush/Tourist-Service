import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

const onButtonClick = jest.fn();

describe('Button Component', () => {
  test('Renders button with children correctly', () => {
    const { getByRole, getByText } = render(<Button version="Primary">Button</Button>);
    expect(getByRole('button')).toBeEnabled();
    expect(getByText(/Button/i)).toBeInTheDocument();
  });

  test('Renders disabled button correctly', () => {
    render(
      <Button isDisabled version="Primary">
        Button
      </Button>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('onClick works', async () => {
    render(
      <Button onClick={onButtonClick} version="Primary">
        Button
      </Button>
    );
    await userEvent.click(screen.getByText('Button'));
    expect(onButtonClick).toHaveBeenCalled();
  });

  test('Render correctly button"s versions', () => {
    render(<Button version="Secondary">Button</Button>);
    expect(screen.getByRole('button')).toHaveStyle({ borderRadius: 0 });
  });
});
