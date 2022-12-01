import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { brandColors } from '../../../common/constants/style.constants';

const onButtonClick = jest.fn();

describe('Button Component', () => {
  test('Renders the Button Component without children', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button', { name: 'Press me' })).toBeInTheDocument();
  });

  test('Renders button with children correctly', () => {
    const { getByRole, getByText } = render(<Button>Reveal</Button>);
    expect(getByRole('button')).toBeEnabled();
    expect(getByText(/reveal/i)).toBeInTheDocument();
  });

  test('Renders disabled button correctly', () => {
    render(<Button isDisabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('onClick works', async () => {
    render(<Button onClick={onButtonClick} />);
    await userEvent.click(screen.getByText('Press me'));
    expect(onButtonClick).toHaveBeenCalled();
  });

  test('Render correctly button"s versions', () => {
    render(<Button version="secondary" />);
    expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: brandColors.dark });
  });
});
