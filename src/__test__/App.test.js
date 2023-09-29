import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import { render, screen, act } from '@testing-library/react'
import App from '../App';

describe("App Main File", () => {
  test('Puede recibir un nuevo user y mostrarlo en la lista', async () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });
    const button = screen.getByRole('button');

    act(() => {
      user.click(nameInput);
      user.keyboard('jane');
      user.click(emailInput);
      user.keyboard('jane@gmail.com');

      user.click(button);
    });

    await screen.findByText('jane');
    await screen.findByText('jane@gmail.com');

    const name = screen.getByRole('cell', { name: 'jane' });
    const email = screen.getByRole('cell', { name: 'jane@gmail.com' });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});